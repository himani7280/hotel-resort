import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/Motion";
import { MotionProvider } from "@/components/MotionProvider";
import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { FONTS } from "@/lib/data";
import { sharedContent as shared } from "@/lib/data";

const googleFontsHref = `https://fonts.googleapis.com/css2?${[FONTS.sans, FONTS.serif]
  .map((font) => `family=${font.family.replace(/ /g, "+")}:wght@${font.weights.join(";")}`)
  .join("&")}&display=swap`;

const fontVars = {
  "--font-body": `"${FONTS.sans.family}", system-ui, sans-serif`,
  "--font-heading": `"${FONTS.display.family}", ${FONTS.display.fallback}`,
} as React.CSSProperties;


export const metadata: Metadata = {
  title: { default: shared.site.titleDefault, template: shared.site.titleTemplate },
  description: shared.site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="tropical" suppressHydrationWarning style={fontVars} className="h-full antialiased">
      <head>
        <link rel="stylesheet" href={googleFontsHref} />
        <link rel="stylesheet" href={FONTS.display.cdnUrl} />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("suryavana-theme")||localStorage.getItem("aurelia-theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}`,
          }}
        />
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
