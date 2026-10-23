"use client";

import { AnimatePresence, animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LEAFLETS, LEG_LEFT, SUN, WAVE_LOWER, WAVE_UPPER } from "@/lib/emblem";
import { markIntroDone } from "@/lib/intro";

const STORAGE_KEY = "suryavana-intro-seen";
const EASE = [0.76, 0, 0.24, 1] as const;
const NAME = "SURYAVANA".split("");

export function Preloader() {
  const [show, setShow] = useState(true);
  const [closing, setClosing] = useState(false);
  const counter = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) {
      markIntroDone();
      const skip = setTimeout(() => setShow(false), 0);
      return () => clearTimeout(skip);
    }

    document.body.style.overflow = "hidden";
    const count = animate(0, 100, {
      duration: 2.4,
      ease: "easeInOut",
      onUpdate: (value) => {
        if (counter.current) counter.current.textContent = String(Math.round(value)).padStart(2, "0");
      },
    });
    const closeTimer = setTimeout(() => setClosing(true), 2900);
    const revealTimer = setTimeout(markIntroDone, 3200);
    const doneTimer = setTimeout(() => {
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // storage unavailable: the intro simply replays next visit
      }
      setShow(false);
    }, 3900);

    return () => {
      count.stop();
      clearTimeout(closeTimer);
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div key="preloader" className="fixed inset-0 z-[100]" aria-hidden="true">
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-forest"
            animate={{ y: closing ? "-100%" : 0 }}
            transition={{ duration: 0.95, ease: EASE }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-forest"
            animate={{ y: closing ? "100%" : 0 }}
            transition={{ duration: 0.95, ease: EASE }}
          />
          <motion.div
            className="absolute inset-x-0 top-1/2 h-px bg-gold"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={closing ? { scaleX: [0, 1, 1], opacity: [1, 1, 0] } : { scaleX: 0 }}
            transition={{ duration: 0.9 }}
          />

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            animate={closing ? { opacity: 0, scale: 1.25, filter: "blur(8px)" } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute h-[28rem] w-[28rem] rounded-full bg-teal/30 blur-3xl"
              animate={{ scale: [0.8, 1.15, 0.9], opacity: [0.3, 0.8, 0.5] }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />

            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center"
            >
              <div className="relative h-28 w-28 sm:h-36 sm:w-36">
                <img
                  src="/images/suryavana-emblem-light.png"
                  alt="Suryavana Emblem"
                  className="h-full w-full object-contain drop-shadow-[0_0_25px_rgba(224,185,107,0.4)]"
                />
              </div>
            </motion.div>

            <h2 className="relative mt-8 flex font-serif text-3xl font-semibold tracking-[0.3em] text-white sm:text-5xl">
              {NAME.map((letter, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%", rotate: 8 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ delay: 1.0 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {letter === " " ? " " : letter}
                  </motion.span>
                </span>
              ))}
            </h2>
            <motion.p
              className="relative mt-3 text-xs font-medium uppercase text-gold"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.55em" }}
              transition={{ delay: 1.7, duration: 1.2, ease: "easeOut" }}
            >
              HOTEL &amp; RESORT
            </motion.p>

            <div className="relative mt-10 w-56">
              <div className="h-px w-full bg-white/15">
                <motion.div
                  className="h-px origin-left bg-gradient-to-r from-gold to-lagoon"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2.4, ease: "easeInOut" }}
                />
              </div>
              <p className="mt-3 font-serif text-sm tabular-nums text-white/60">
                <span ref={counter}>00</span>
                <span className="text-gold">%</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

