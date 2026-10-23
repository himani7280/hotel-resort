/** Decorative background animations (pure CSS, no JS). All are aria-hidden and ignore pointer events. */

const BUBBLES = Array.from({ length: 24 }, (_, i) => ({
  left: `${(i * 29 + 3) % 98}%`,
  size: 3 + ((i * 2.5) % 6), // Dainty, elegant smaller bubbles between 3px and 8px
  duration: 8 + ((i * 3.5) % 12),
  delay: -((i * 1.9) % 16),
}));

export function Sparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden" aria-hidden="true">
      {BUBBLES.map((s, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            left: s.left,
            width: `${Math.round(s.size)}px`,
            height: `${Math.round(s.size)}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/** Animated sea waves along the bottom edge of a section. `className` sets the fill colour, e.g. "text-cream". */
export function Waves({ className = "text-cream" }: { className?: string }) {
  const path = "M0 40 C 150 10 300 70 450 40 S 750 10 900 40 S 1050 70 1200 40 V80 H0 Z";
  return (
    <div className={`pointer-events-none absolute inset-x-0 bottom-[-1px] z-[6] h-14 overflow-hidden sm:h-20 ${className}`} aria-hidden="true">
      <svg className="wave-layer-b absolute bottom-0 h-full w-[200%]" viewBox="0 0 2400 80" preserveAspectRatio="none" fill="currentColor">
        <path d={path} />
        <path d={path} transform="translate(1200 0)" />
      </svg>
      <svg className="wave-layer absolute bottom-0 h-full w-[200%]" viewBox="0 0 2400 80" preserveAspectRatio="none" fill="currentColor" style={{ transform: "translateY(8px)" }}>
        <path d={path} />
        <path d={path} transform="translate(1200 0)" />
      </svg>
    </div>
  );
}

/** Two drifting sun-glow blobs for section backgrounds. Parent must be `relative overflow-hidden`. */
export function Glows() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <span className="glow -left-24 top-10 h-72 w-72 bg-gold" />
      <span className="glow -right-24 bottom-0 h-80 w-80 bg-lagoon" style={{ animationDelay: "-8s" }} />
    </div>
  );
}
