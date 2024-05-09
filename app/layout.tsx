import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";

const oswald = Oswald({
  weight: ["200", "300", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghazi Taekwondo  and Fitness Club",
  description: "Ghazi Taekwondo  and Fitness Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <ResponsiveNav/>
        {children}</body>
    </html>
  );
}
