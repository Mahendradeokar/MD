"use client";

import { useEffect, useRef } from "react";

type HandAngles = { hours: number; minutes: number; seconds: number };

function getHandAngles(date: Date): HandAngles {
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  const totalSeconds = seconds + milliseconds / 1000;
  const totalMinutes = minutes + totalSeconds / 60;
  const totalHours = hours + totalMinutes / 60;

  return {
    hours: totalHours * 30,
    minutes: totalMinutes * 6,
    seconds: totalSeconds * 6,
  };
}

function setHandAngle(element: HTMLDivElement | null, deg: number) {
  if (!element) return;
  element.style.transform = `translateX(-50%) rotate(${deg}deg)`;
}

export default function AnalogClock() {
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const tick = () => {
      const angles = getHandAngles(new Date());

      setHandAngle(hourRef.current, angles.hours);
      setHandAngle(minuteRef.current, angles.minutes);
      setHandAngle(secondRef.current, angles.seconds);

      frame = requestAnimationFrame(tick);
    };

    tick();

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="cursor-default" aria-hidden>
      <time className="relative block size-8 rounded-full border border-neutral-300 dark:border-neutral-600 antialiased">
        <div className="absolute left-1/2 top-1/2 size-px -translate-x-1/2 -translate-y-1/2 bg-neutral-400 dark:bg-neutral-500" />
        <div
          ref={hourRef}
          className="absolute bottom-1/2 left-1/2 h-1/4 w-px origin-bottom rounded-full bg-neutral-600 dark:bg-neutral-400"
        />
        <div
          ref={minuteRef}
          className="absolute bottom-1/2 left-1/2 h-2/5 w-px origin-bottom rounded-full bg-neutral-600 dark:bg-neutral-400"
        />
        <div
          ref={secondRef}
          className="absolute bottom-1/2 left-1/2 h-2/5 w-[0.5px] origin-bottom rounded-full bg-neutral-500 dark:bg-neutral-400"
        />
      </time>
    </div>
  );
}
