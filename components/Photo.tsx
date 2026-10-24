import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Fills its `relative` parent. Add `group` on the parent for hover zoom. */
export function Photo({ src, alt, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", priority = false }: PhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      priority={priority}
      sizes={sizes}
      className={`object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 ${className}`}
    />
  );
}
