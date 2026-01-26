// src/app/layout.tsx
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./../styles/globals.css";

// ✅ SPACE GROTESK FONT (Premium tech feel)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

// Clean URL (removed trailing spaces)
const SITE_URL = "https://deepanshu-portfolio.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Deepanshu | Data Science & Analytics Learner",
    template: "%s | Deepanshu",
  },
  description:
    "BCA student building real-world data projects and learning data science step by step. Open to full-time Data Analyst roles starting 2026.",
  keywords: [
    "data science",
    "analytics",
    "python",
    "pandas",
    "SQL",
    "BCA student",
    "portfolio",
    "data analyst",
    "machine learning",
    "India",
    "remote work",
  ],
  authors: [{ name: "Deepanshu" }],
  creator: "Deepanshu",
  publisher: "Deepanshu",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Deepanshu | Data Science & Analytics Learner",
    description:
      "BCA student building real-world data projects and learning data science step by step.",
    siteName: "Deepanshu Portfolio",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Deepanshu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepanshu | Data Science & Analytics Learner",
    description:
      "BCA student building real-world data projects and learning data science step by step.",
    images: [`${SITE_URL}/og-image.jpg`],
    creator: "@deepanshu",
  },
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
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {/* ❌ REMOVED Header component to prevent double navbar */}
        {/* ✅ FloatingNavbar will be in individual pages only */}
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
