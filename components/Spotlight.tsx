"use client";

import type { ReactNode } from "react";

/** Wraps a card and feeds the pointer position to the `.spotlight` glow in globals.css. */
export function Spotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`spotlight ${className}`}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const box = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--mx", `${event.clientX - box.left}px`);
        event.currentTarget.style.setProperty("--my", `${event.clientY - box.top}px`);
      }}
    >
      {children}
    </div>
  );
}
