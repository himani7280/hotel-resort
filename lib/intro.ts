"use client";

import { useSyncExternalStore } from "react";

let introDone = false;
const listeners = new Set<() => void>();

export const markIntroDone = () => {
  if (introDone) return;
  introDone = true;
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

/** False until the first-visit preloader has opened (or was skipped). */
export const useIntroDone = () =>
  useSyncExternalStore(
    subscribe,
    () => introDone,
    () => false,
  );
