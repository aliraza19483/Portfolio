import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Raza | Full Stack & DevOps Engineer",
  description:
    "Portfolio of Ali Raza — a Full Stack & DevOps Engineer specializing in MERN stack, Docker, CI/CD, and scalable system architecture. B.Tech CSE at DIT University.",
  keywords: [
    "Ali Raza",
    "DevOps",
    "Cloud Engineer",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Ali Raza" }],
  openGraph: {
    title: "Ali Raza | Full Stack & DevOps Engineer",
    description:
      "Building full-stack apps. Automating infrastructure. Shipping fast.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Raza | Full Stack & DevOps Engineer",
    description:
      "Building full-stack apps. Automating infrastructure. Shipping fast.",
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-bg text-white selection:bg-accent-blue/30">
        {/* Noise texture overlay */}
        <div className="noise-overlay" />

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
