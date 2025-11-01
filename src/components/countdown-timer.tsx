"use client";

import { useState, useEffect } from 'react';

const TWO_HOURS_IN_MS = 2 * 60 * 60 * 1000;

export function CountdownTimer({ onExpire }: { onExpire: () => void }) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const getInitialTime = () => {
      const storedEndTime = localStorage.getItem('offerEndTime');
      if (storedEndTime) {
        return parseInt(storedEndTime, 10);
      }
      const newEndTime = new Date().getTime() + TWO_HOURS_IN_MS;
      localStorage.setItem('offerEndTime', newEndTime.toString());
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
    
    // Set initial value
    updateTimer();

    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [onExpire]);

  if (timeLeft === null) {
    return <div className="text-center text-lg font-bold p-2">...</div>;
  }

  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="text-center text-lg font-mono font-bold tracking-widest p-2 text-destructive">
      {timeLeft > 0 ? (
        <span>
          {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
        </span>
      ) : (
        <span>Oferta Expirada!</span>
      )}
    </div>
  );
}
