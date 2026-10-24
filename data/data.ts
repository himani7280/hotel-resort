import type { TargetAndTransition, Transition, Variants } from "framer-motion";
import raw from "./data.json";

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
  avatar?: string;
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

type Brand = { name: string; tagline: string; phone: string; email: string; address: string; hours: string[] };
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
    mission: { title: string; text: string };
    vision: { title: string; text: string };
    whyUs: { title: string; text: string }[];
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

/**
 * Variants exported directly from data.json "variants" key
 */
export const VARIANTS = raw.variants as {
  hero: Record<"container" | "title" | "subtitle" | "cta", Variants>;
  fade: Variants;
  slideUp: Variants;
  slideDown: Variants;
  slideLeft: Variants;
  slideRight: Variants;
  scale: Variants;
  navbar: Variants;
  drawerItem: Variants;
  reveal: Record<keyof typeof raw.motion.reveal, Variants>;
  stagger: { container: Variants; item: Variants };
  word: { container: Variants; item: Variants };
};

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

export type FontConfig = { family: string; weights: string[] };
export const FONTS = raw.fonts as {
  sans: FontConfig;
  serif: FontConfig;
  display: { family: string; cdnUrl: string; fallback: string };
};

// Consolidated content exports from single data.json
export const content = raw.content;
export const aboutContent = raw.content.about;
export const blogContent = raw.content.blog;
export const contactContent = raw.content.contact;
export const diningContent = raw.content.dining;
export const homeContent = raw.content.home;
export const miscContent = raw.content.misc;
export const roomsContent = raw.content.rooms;
export const sharedContent = raw.content.shared;
export const wellnessContent = raw.content.wellness;

