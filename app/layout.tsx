import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sovereigntycontrol.com"),
  title: {
    default: "Sovereignty Control | Managed matter readiness for professional firms",
    template: "%s | Sovereignty Control"
  },
  description:
    "Sovereignty Control is an early-stage managed matter-readiness method for firms handling citizenship, residence, relocation and investment-migration work.",
  applicationName: "Sovereignty Control",
  category: "Professional services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Sovereignty Control",
    description:
      "Managed matter readiness, programme intelligence and advisor-review preparation for professional firms.",
    url: "https://sovereigntycontrol.com",
    siteName: "Sovereignty Control",
    type: "website",
    locale: "en_GB"
  },
  twitter: {
    card: "summary",
    title: "Sovereignty Control",
    description:
      "Managed matter readiness, programme intelligence and advisor-review preparation for professional firms."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071526"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <NavBar />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
