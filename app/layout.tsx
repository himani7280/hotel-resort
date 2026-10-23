import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/Motion";
import { MotionProvider } from "./components/MotionProvider";
import { Navbar } from "./components/Navbar";
import { Preloader } from "./components/Preloader";

const bodyFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const titleFont = Plus_Jakarta_Sans({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Suryavana Hotel & Resort | Sun & Forest Luxury Sanctuary in Goa",
    template: "%s | Suryavana Hotel & Resort",
  },
  description: "Escape to Suryavana Hotel & Resort. Where the golden sun awakens ancient forest sanctuaries, featuring luxury timber villas, wellness rituals, and pristine coastal retreats.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="tropical" suppressHydrationWarning className={`${bodyFont.variable} ${titleFont.variable} h-full antialiased`}>
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/google-sans" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("suryavana-theme")||localStorage.getItem("aurelia-theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <MotionProvider>
          <Preloader />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
