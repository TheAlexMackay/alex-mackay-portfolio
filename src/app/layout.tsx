import type {Metadata, ResolvingMetadata} from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { createClient } from "../prismicio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();

    const page = await client.getSingle("settings")

    return {
        title: page.data.site_title || "Alex Mackay",
        description: page.data.meta_description,
        openGraph: {
            images: [page.data.og_image.url || ""]
        }
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>Header here</header>
            {children}
        <footer>Footer here</footer>
      </body>
    </html>
  );
}
