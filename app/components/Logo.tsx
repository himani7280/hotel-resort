"use client";

import Image from "next/image";

type EmblemProps = {
  uid?: string;
  dark?: boolean;
  animated?: boolean;
  className?: string;
};

/** Standalone Suryavana emblem: intertwined gold S, sun rising over green peaks & forest fronds. */
export function Emblem({ dark = false, className = "h-12 w-12" }: EmblemProps) {
  const src = dark ? "/images/suryavana-emblem.webp" : "/images/suryavana-emblem-light.webp";

  return (
    <div className={`relative inline-block shrink-0 overflow-hidden ${className}`} aria-hidden="true">
      <Image
        src={src}
        alt="Suryavana Emblem"
        fill
        sizes="96px"
        className="object-contain"
        priority
      />
    </div>
  );
}

type LogoProps = {
  light?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export function Logo({ light = false, className = "", size = "md" }: LogoProps) {
  // Use trimmed high-resolution assets generated from the user's provided logo
  const src = light
    ? "/images/suryavana-logo-light-trimmed.webp"
    : "/images/suryavana-logo-trimmed.webp";

  const sizeClasses = {
    sm: "h-9 sm:h-10 w-auto",
    md: "h-11 sm:h-12.5 w-auto",
    lg: "h-11 sm:h-12.5 w-auto",
    xl: "h-16 sm:h-18 md:h-20 w-auto",
  }[size];

  return (
    <span className={`logo group inline-flex items-center transition-all duration-500 ease-out hover:scale-[1.02] ${className}`}>
      <img
        src={src}
        alt="Suryavana Hotel & Resort"
        className={`${sizeClasses} max-w-[340px] sm:max-w-[460px] object-contain transition-all duration-500 ease-out`}
        loading="eager"
      />
    </span>
  );
}
