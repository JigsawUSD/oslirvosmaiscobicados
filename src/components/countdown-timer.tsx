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
    let intervalId: NodeJS.Timeout | null = null;

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
        if (intervalId) clearInterval(intervalId);
      } else {
        setTimeLeft(distance);
      }
    };
    
    updateTimer(); // Set initial value

    intervalId = setInterval(updateTimer, 1000);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [onExpire, initialDurationInMs, storageKey]);

  if (timeLeft === null) {
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
