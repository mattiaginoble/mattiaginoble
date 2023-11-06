import "./globals.css";
import type { Metadata } from "next";
import clsx from "clsx";
import { Red_Hat_Display, Red_Hat_Mono } from "next/font/google";
import { createClient } from "@/prismicio";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-Hat-Display",
  display: "swap",
});

const redHatMono = Red_Hat_Mono({
  subsets: ["latin"],
  variable: "--font-red-Hat-Mono",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("settings");

  return {
    title: page.data.site_title || "Mattia Ginoble",
    description: page.data.meta_description || "A blog by Mattia Ginoble",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(redHatDisplay.variable, redHatMono.variable)}
    >
      <body>
        <header>Header!</header>
        {children}
        <footer>Footer!</footer>
      </body>
    </html>
  );
}
