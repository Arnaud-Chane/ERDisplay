import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ERDisplay",
  description: "Little app to display Elden Ring data by pushing button or by searching specific name.",
};

type childrenProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: childrenProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
