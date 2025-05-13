import type { Metadata } from "next";
import { avenir } from './fonts';
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Heeyeon Lee",
  description: "Welcome to my website!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${avenir.variable}`}>
      <body className="font-avenir bg-[#faf6f1]">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
