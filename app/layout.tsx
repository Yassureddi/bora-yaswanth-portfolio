import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://borayaswanth.dev"),
  title: "Bora Yaswanth | Full Stack Developer",
  description:
    "Portfolio of Bora Yaswanth, Full Stack Developer with 1+ year of professional experience building modern web applications using Next.js, TypeScript, Node.js, MongoDB and PostgreSQL.",
  keywords: [
    "Bora Yaswanth",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Visakhapatnam",
  ],
  authors: [{ name: "Bora Yaswanth" }],
  creator: "Bora Yaswanth",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Bora Yaswanth | Full Stack Developer",
    description:
      "Portfolio of Bora Yaswanth, Full Stack Developer with 1+ year of professional experience building modern web applications.",
    siteName: "Bora Yaswanth Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bora Yaswanth | Full Stack Developer",
    description:
      "Full Stack Developer with 1+ year of professional experience building modern web applications.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
