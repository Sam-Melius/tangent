import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "../components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tangent Group",
  description:
    "Tangent Group is a strategic technology firm organizing the chaos — launching and scaling innovative ventures in legal tech, immersive entertainment, and digital infrastructure.",
  keywords: [
    "Tangent Group",
    "technology firm",
    "strategic innovation",
    "legal tech",
    "immersive entertainment",
    "infrastructure startups",
    "enterprise technology",
    "Aaron Day",
    "Andrew Zwicker",
    "Lychelle Loveland Day",
    "Tangent Group team"
  ],
  openGraph: {
    title: "Tangent Group",
    description:
      "Organizing the chaos — a strategic technology group scaling ventures across legal tech, immersive entertainment, and digital infrastructure.",
    type: "website",
    url: "https://www.tangentgroup.io",
    siteName: "Tangent Group",
    images: [
      {
        url: "fulllogo.png", // Use the hero image or branded graphic (ideally 1200x630)
        width: 1200,
        height: 630,
        alt: "Tangent Group Background Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tangent Group",
    description:
      "Organizing the chaos — strategic technology across legal, entertainment, and infrastructure sectors.",
    images: ["https://www.tangentgroup.io/TangentBackground.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
