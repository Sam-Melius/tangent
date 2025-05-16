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
    "Tangent Group is a strategic technology firm launching and scaling innovative ventures in legal tech, immersive entertainment, and digital infrastructure.",
  keywords: [
    "Tangent Group",
    "technology firm",
    "legal tech",
    "immersive entertainment",
    "infrastructure startups",
    "Aaron Day",
    "Andrew Zwicker",
    "Lychelle Loveland Day",
    "Tangent Group team"
  ],
  openGraph: {
    title: "Tangent Group",
    description:
      "A strategic technology group focused on building and scaling forward-thinking ventures across legal tech, entertainment, and infrastructure.",
    type: "website",
    url: "https://www.tangentgroup.io",
    siteName: "Tangent Group",
    images: [
      {
        url: "https://www.tangentgroup.io/og-image.jpg", // Replace with actual image if available
        alt: "Tangent Group Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tangent Group",
    description:
      "Launching and scaling ventures across legal tech, entertainment, and infrastructure.",
    images: ["https://www.tangentgroup.io/og-image.jpg"], // Replace with actual image
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
