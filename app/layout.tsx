import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import "./juris-shell.css";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { SitePathways } from "@/components/partners/SitePathways";
import { juris } from "@/lib/partners";
import { siteUrl } from "@/lib/discovery";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Juris Partners | Better information. Clearer client work.",
    template: "%s | Juris Partners",
  },
  description: juris.description,
  applicationName: "Juris Partners",
  category: "Professional services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Juris Partners",
    description: juris.description,
    url: siteUrl,
    siteName: "Juris Partners",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "Juris Partners",
    description: juris.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#202a30",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <NavBar />
        <div id="main-content" tabIndex={-1}>
          <SitePathways />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
