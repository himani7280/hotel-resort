import type { TargetAndTransition, Transition, Variants } from "framer-motion";
import raw from "@/data/data.json";

/** All site content lives in data/data.json; edit that file to change the site. */

export type RoomCategory = "Garden" | "Ocean" | "Suite" | "Villa";

export type Room = {
  slug: string;
  name: string;
  category: RoomCategory;
  tagline: string;
  price: number;
  size: number;
  guests: number;
  bed: string;
  view: string;
  image: string;
  gallery: string[];
  amenities: string[];
  description: string[];
};

export type Experience = { title: string; text: string; back: string; image: string; href: string };

export type Testimonial = {
  name: string;
  from: string;
  stay: string;
  rating: number;
  quote: string;
};

export type Stat = { value: number; suffix: string; label: string; decimals?: number };

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  body: string[];
};

type Brand = { name: string; tagline: string; phone: string; email: string; address: string };
type NavLink = { label: string; href: string };

export const BRAND: Brand = raw.brand;
export const NAV_LINKS: NavLink[] = raw.navLinks;
export const IMG: Record<keyof typeof raw.images, string> = raw.images;
export const ROOM_FILTERS: string[] = raw.roomFilters;
export const ROOMS: Room[] = raw.rooms as Room[];
export const EXPERIENCES: Experience[] = raw.experiences;
export const AMENITIES: string[] = raw.amenities;
export const TESTIMONIALS: Testimonial[] = raw.testimonials;
export const STATS: Stat[] = raw.stats;
export const POSTS: Post[] = raw.posts;

export const getRoom = (slug: string) => ROOMS.find((room) => room.slug === slug);
export const getPost = (slug: string) => POSTS.find((post) => post.slug === slug);

export type HomeContent = {
  heroImages: string[];
  heroPhrases: string[];
  introTitle: string;
  introText: string[];
  introImages: string[];
  parallaxImage: string;
  gallery: string[];
  dining: { eyebrow: string; title: string; text: string; images: string[]; points: string[] };
  about: {
    story: string[];
    values: { title: string; text: string; image: string }[];
    milestones: { year: string; text: string }[];
  };
  contact: { hours: string; mapSrc: string };
};

export const HOME: HomeContent = raw.home;

export type MotionConfig = {
  ease: [number, number, number, number];
  duration: number;
  reveal: Record<keyof typeof raw.motion.reveal, Variants>;
  stagger: { container: Variants; item: Variants };
  word: { container: Variants; item: Variants };
  stack: { topOffset: number; step: number; endScale: number; endOpacity: number };
  page: { initial: TargetAndTransition; animate: TargetAndTransition; transition: Transition };
};

export const MOTION = raw.motion as unknown as MotionConfig;

export type GalleryItem = { src: string; title: string; category: string };

export type GalleryContent = {
  hero: { title: string; subtitle: string; image: string };
  intro: { eyebrow: string; title: string; text: string };
  arches: { label: string; caption: string; image: string }[];
  categories: string[];
  items: GalleryItem[];
  cta: { title: string; text: string };
};

export const GALLERY: GalleryContent = raw.gallery;
