
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-bubble",
  display: "swap",
});

export const metadata: Metadata = {
  title: "H2O YSWS",
  description: "A 5 day in person Hack Club YSWS event in Goa, India."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body>{children}</body>
    </html>
  );
}

