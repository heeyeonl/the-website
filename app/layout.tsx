import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sansita } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });
const sansita = Sansita({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-sansita',
});

export const metadata: Metadata = {
  title: "heeyeonl",
  description: "Welcome to my personal portfolio website showcasing my projects, games, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sansita.variable}`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
