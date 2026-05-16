import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Poetic Pookie 🌸 | Explore Classical & Modern Poetry",
    template: "%s | Poetic Pookie",
  },
  alternates: {
    canonical: "https://poetic-pookie.vercel.app/",
  },
  description: "Immerse yourself in Poetic Pookie. Filter, search, and discover timeless verses, stanzas, and sonnets streamed instantly from legendary bards.",
  keywords: ["poetry", "poems", "literature", "bards", "sonnets", "poetic pookie", "poetrydb"],
  authors: [{ name: "Poetic Pookie Team" }],
  icons: {
    icon: "🌸",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <ThemeProvider>
        <Header />
        <body className="min-h-full flex flex-col">{children}</body>
        <Footer />
      </ThemeProvider>
    </html>
  );
}
