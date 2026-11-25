import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#4F46E5",
};

export const metadata: Metadata = {
  title: "Sambhash AI — AI Voice Calling & Business Automation Platform",
  description:
    "Automate business conversations with AI voice agents that help you connect with leads, qualify prospects, manage calls, and streamline your workflow.",
  keywords: [
    "AI Voice Calling",
    "Voice AI SaaS",
    "Lead Qualification AI",
    "Automated Calling",
    "Sales Call Automation",
    "Sambhash AI",
    "Real Estate Lead AI",
  ],
  authors: [{ name: "Sambhash AI" }],
  openGraph: {
    title: "Sambhash AI — Turn Every Conversation Into an Opportunity",
    description:
      "Automate business conversations with AI voice agents that help you connect with leads, qualify prospects, manage calls, and streamline your workflow.",
    url: "https://sambhashai.com",
    siteName: "Sambhash AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sambhash AI — AI Voice Calling & Business Automation",
    description:
      "Automate business conversations with AI voice agents that qualify prospects and streamline workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-[#FAFAFC] text-[#0F172A] antialiased selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
