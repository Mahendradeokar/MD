"use client";

import { useEffect, useRef, useState } from "react";

export default function AnalogClock() {
  const ref = useRef<HTMLTimeElement>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const el = ref.current;
      if (!el) return;
      el.style.setProperty("--time-hours", now.getHours().toString());
      el.style.setProperty("--time-minutes", now.getMinutes().toString());
      el.style.setProperty("--time-seconds", now.getSeconds().toString());
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <button data-state="closed" className="cursor-default">
      <time
        ref={ref}
        className="relative block size-8 rotate-180 rounded-full border border-neutral-300 dark:border-neutral-600 antialiased"
      >
        <div className="absolute left-1/2 top-1/2 size-px -translate-x-1/2 -translate-y-1/2 bg-neutral-400 dark:bg-neutral-500" />
        <div
          className="absolute left-1/2 top-1/2 h-1/4 w-px rounded-full bg-neutral-600 dark:bg-neutral-400"
          style={{
            transformOrigin: "0 0",
            transform:
              "rotate(calc((var(--time-hours) * 30deg) + ((var(--time-minutes) / 2) * 1deg))) translate(-50%, 0%)",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-2/5 w-px rounded-full bg-neutral-600 dark:bg-neutral-400"
          style={{
            transformOrigin: "0 0",
            transform:
              "rotate(calc(var(--time-minutes) * 6deg)) translate(-50%, 0%)",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-2/5 w-[0.5px] rounded-full bg-neutral-500 dark:bg-neutral-400"
          style={{
            transformOrigin: "0 0",
            transform:
              "rotate(calc(var(--time-seconds) * 6deg)) translate(-50%, 0%)",
          }}
        />
      </time>
    </button>
  );
}
