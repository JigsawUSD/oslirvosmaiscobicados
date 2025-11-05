"use client";

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialDurationInMs: number;
  storageKey: string;
  onExpire: () => void;
  className?: string;
  expiredText?: string;
}

export function CountdownTimer({
  initialDurationInMs,
  storageKey,
  onExpire,
  className,
  expiredText = "Oferta Expirada!"
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    // This code now runs only on the client, after the initial render.
    const getInitialTime = () => {
      const storedEndTime = localStorage.getItem(storageKey);
      if (storedEndTime) {
        return parseInt(storedEndTime, 10);
      }
      const newEndTime = new Date().getTime() + initialDurationInMs;
      localStorage.setItem(storageKey, newEndTime.toString());
      return newEndTime;
    };

    const endTime = getInitialTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        setTimeLeft(0);
        onExpire();
        // No need to clear interval here, it will be cleared in the return function
      } else {
        setTimeLeft(distance);
      }
    };
    
    updateTimer(); // Set initial value on client

    const intervalId = setInterval(updateTimer, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [onExpire, initialDurationInMs, storageKey]);

  if (timeLeft === null) {
    // Render a placeholder on the server and initial client render
    return <div className="text-center text-lg font-bold p-2">...</div>;
  }

  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className={className || "text-center text-lg font-mono font-bold tracking-widest p-2 text-destructive"}>
      {timeLeft > 0 ? (
        <span>
          {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
        </span>
      ) : (
        <span>{expiredText}</span>
      )}
    </div>
  );
}
