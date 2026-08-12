import type { Metadata, Viewport } from "next";
import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://borayaswanth.dev"),
  title: "Bora Yaswanth | Full Stack Developer",
  description:
    "Portfolio of Bora Yaswanth, Full Stack Developer with 1 year of professional experience in Next.js, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, REST APIs and Docker.",
  keywords: [
    "Bora Yaswanth",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Visakhapatnam",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Bora Yaswanth" }],
  creator: "Bora Yaswanth",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Bora Yaswanth | Full Stack Developer",
    description:
      "Portfolio of Bora Yaswanth, Full Stack Developer with 1 year of professional experience in Next.js, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, REST APIs and Docker.",
    siteName: "Bora Yaswanth Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bora Yaswanth | Full Stack Developer",
    description:
      "Full Stack Developer with 1 year of professional experience building modern web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
