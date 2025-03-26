import { Geist, Geist_Mono } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Free Your Voice | Transformative Retreat in Iceland",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  description:
    "Join our 3-day transformative journey in Iceland. Discover voice activation, yoga, and authentic connection through sacred practices in nature's embrace.",
  keywords: [
    "voice activation",
    "Iceland retreat",
    "spiritual retreat",
    "sound healing",
    "yoga retreat",
    "chi gong",
    "authentic connection",
    "creative expression",
    "transformative journey",
    "Snæfellsnes",
    "Kirkjufell",
    "voice healing",
    "movement exploration",
    "spiritual transformation",
    "wellness retreat",
  ],
  authors: [{ name: "Free Your Voice" }],
  creator: "Free Your Voice",
  publisher: "Free Your Voice",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.freeyourvoice.life",
    site_name: "Free Your Voice Retreat",
    title: "Free Your Voice | Transformative Iceland Retreat",
    description:
      "Awaken ancient wisdom through voice, movement, and nature in Iceland. Experience voice activation, yoga, and authentic connection in a 3-day transformative journey.",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Falma-resonance-poster-landscape.jpeg?alt=media&token=9a5cfc61-cf7f-4989-b62d-3f279aec000f",
        width: 1200,
        height: 630,
        alt: "Free Your Voice Retreat in Iceland - Transformative Journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Your Voice | Sacred Voice & Movement Retreat in Iceland",
    description:
      "Unlock your authentic voice and connect with ancient wisdom in Iceland. Join our transformative 3-day retreat featuring voice activation, yoga, and nature immersion.",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whitelotus-23.appspot.com/o/Alma-Resonance%2Falma-resonance-poster-landscape.jpeg?alt=media&token=9a5cfc61-cf7f-4989-b62d-3f279aec000f",
    ],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.freeyourvoice.life",
    languages: {
      "en-US": "https://www.freeyourvoice.life",
    },
  },
  category: "Wellness Retreat",
  themeColor: "#1e90ff",
  other: {
    "price-range": "$$$$",
    location: "Snæfellsnes, Iceland",
    "event-type": "Retreat",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
