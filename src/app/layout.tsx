import "./globals.css";
import type { Metadata } from "next";
import clsx from "clsx";
import { Red_Hat_Display, Red_Hat_Mono } from "next/font/google";
import { createClient, repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import AnimatedMenu from "@/components/Menu/AnimatedMenu";

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

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Mattia Ginoble",
    description: settings.data.meta_description || "A blog by Mattia Ginoble.",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <Providers>
      <html
        lang="en"
        className={clsx(
          redHatDisplay.variable,
          redHatMono.variable,
          "bg-white dark:bg-[#141414] dark:text-white"
        )}
      >
        <body>
          <Header settings={settings} />
          <main>{children}</main>
          <Footer settings={settings} />
          <PrismicPreview repositoryName={repositoryName} />
          <AnimatedMenu settings={settings} />
        </body>
      </html>
    </Providers>
  );
}
