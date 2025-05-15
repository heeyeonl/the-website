import type { Metadata } from "next";
import { avenir } from './fonts';
import "./globals.css";
import Navigation from "./components/Navigation";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "Heeyeon Lee",
  description: "Welcome to my website!",
  icons: {
    icon: [
      { url: '/tabicon.png', sizes: 'any' }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${avenir.variable}`}>
      <body className="font-avenir">
        <ThemeProvider>
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
