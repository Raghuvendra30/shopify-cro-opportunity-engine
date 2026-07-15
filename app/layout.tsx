import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Shopify CRO Opportunity Engine",
    template: "%s | Shopify CRO Opportunity Engine",
  },

  description:
    "AI-powered, evidence-based Shopify Conversion Rate Optimization audits built with Next.js, Playwright, and OpenAI.",

  keywords: [
    "Shopify",
    "CRO",
    "Conversion Rate Optimization",
    "AI",
    "OpenAI",
    "Playwright",
    "Next.js",
  ],

  authors: [
    {
      name: "Raghuvendra Pratap Singh",
    },
  ],

  creator: "Raghuvendra Pratap Singh",

  metadataBase: new URL("https://example.com"),

  openGraph: {
    title: "Shopify CRO Opportunity Engine",

    description:
      "AI-powered Shopify CRO auditing platform.",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} min-h-screen bg-slate-50 font-sans text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}