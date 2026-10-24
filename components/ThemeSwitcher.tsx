"use client";

import { useEffect, useRef, useState } from "react";

const THEMES = [
  { id: "tropical", label: "Suryavana", colors: ["#09251b", "#1f7d58", "#c59b4b"] },
  { id: "sunset", label: "Sunset", colors: ["#2b1712", "#d97d4c", "#da9847"] },
  { id: "ocean", label: "Ocean", colors: ["#081e2e", "#3895be", "#c59b4b"] },
] as const;

const KEY = "suryavana-theme";

/** Palette icon that opens a small menu with three colour themes. Choice is remembered in localStorage. */
export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<string>("tropical");
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (current) setTheme(current);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => box.current && !box.current.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const choose = (id: string) => {
    setTheme(id);
    document.documentElement.dataset.theme = id;
    try {
      localStorage.setItem(KEY, id);
    } catch {}
    setOpen(false);
  };

  return (
    <div ref={box} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change colour theme"
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.8 1.8-1.7 0-.5-.2-.9-.5-1.3-.3-.4-.5-.8-.5-1.3 0-.9.8-1.7 1.7-1.7H17a4 4 0 0 0 4-4C21 6.5 17 3 12 3Z" />
          <circle cx="7.5" cy="11" r="1" fill="currentColor" />
          <circle cx="10.5" cy="7.2" r="1" fill="currentColor" />
          <circle cx="15" cy="7.2" r="1" fill="currentColor" />
        </svg>
      </button>

      {open && (
        <div role="menu" className="absolute right-0 top-full z-50 mt-3 w-52 rounded-2xl bg-white p-2 text-ink shadow-2xl ring-1 ring-black/5">
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              role="menuitemradio"
              aria-checked={theme === t.id}
              onClick={() => choose(t.id)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-black/5 ${theme === t.id ? "font-semibold" : ""}`}
            >
              <span>{t.label}</span>
              <span className="flex -space-x-1.5">
                {t.colors.map((c) => (
                  <span key={c} className="h-5 w-5 rounded-full border-2 border-white" style={{ background: c }} />
                ))}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
