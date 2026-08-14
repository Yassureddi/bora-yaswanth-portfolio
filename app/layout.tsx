import type { Metadata, Viewport } from "next";
import { Instrument_Serif, DM_Sans, Syne } from "next/font/google";
import ThemeProvider from "@/components/Theme/ThemeProvider";
import Cursor from "@/components/Cursor/Cursor";
import { DEFAULT_THEME, THEME_STORAGE_KEY } from "@/lib/theme";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://borayaswanth.dev"),
  title: "Bora Yaswanth — Full Stack Developer",
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
    title: "Bora Yaswanth — Full Stack Developer",
    description:
      "Portfolio of Bora Yaswanth, Full Stack Developer with 1+ year of professional experience building modern web applications.",
    siteName: "Bora Yaswanth",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bora Yaswanth — Full Stack Developer",
    description:
      "Full Stack Developer with 1+ year of professional experience building modern web applications.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#10261D",
  width: "device-width",
  initialScale: 1,
};

const themeBoot = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(t==="forest"||t==="editorial"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme={DEFAULT_THEME}
      className={`${instrumentSerif.variable} ${syne.variable} ${dmSans.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <ThemeProvider>
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
