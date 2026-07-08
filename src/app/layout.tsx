import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/components/site/ThemeProvider";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const siteName = "Alchyx — the D-ALabs component index";
const siteDescription =
  "Alchyx is the D-ALabs design system — one coherent React + TypeScript library on the Lab / Dark / Ark language, bringing the best of eight design systems into a single accessible system. Explore the foundations and search every component.";

export const metadata: Metadata = {
  metadataBase: new URL("https://alchyx.d-alabs.com"),
  title: {
    default: "Alchyx",
    template: "Alchyx · %s",
  },
  description: siteDescription,
  keywords: [
    "Alchyx",
    "design system",
    "D-ALabs",
    "React components",
    "component library",
    "Lab Dark Ark",
    "design tokens",
  ],
  authors: [{ name: "D-ALabs, LLC" }],
  icons: {
    // rel="icon" is managed by the theme script (swaps flask by skin);
    // public/favicon.ico is the pre-JS baseline. Here we add the touch icon.
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    title: siteName,
    description: siteDescription,
    siteName: "Alchyx",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F2EA" },
    { media: "(prefers-color-scheme: dark)", color: "#0D1522" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="lab"
      className={`${hanken.variable} ${grotesk.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body className="alx-root">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <div className="alx-grain" aria-hidden="true" />
        <a href="#site-main" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <SiteNav />
          <main id="site-main">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
