import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/globals.css"

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const openSans = Open_Sans({
  weight: ["300", "400", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Money",
  description: "A digital money app built with Next.js and Tailwind CSS",
  keywords: ["Digital Money", "Next.js", "Tailwind CSS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`w-full min-h-screen flex flex-col justify-between bg-black-primary text-white ${openSans.className}`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
