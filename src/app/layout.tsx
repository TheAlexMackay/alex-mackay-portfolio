import type {Metadata} from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { createClient } from "../prismicio";
import "../components/animations"

import Header from "../components/Header"
import Footer from "../components/Footer"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
    display: 'swap',
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
    display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();

    const settings = await client.getSingle("settings")

    return {
        title: settings.data.site_title || "Alex Mackay",
        description: settings.data.meta_description,
        openGraph: {
            images: [settings.data.og_image.url || ""]
        }
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className={clsx(openSans.className, montserrat.className)}>
      <html lang="en" className={`${openSans.variable} ${montserrat.variable} antialiased`}>
      <body className="relative">
        <Header />
            {children}
        <Footer />
        {/*<div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50"/>*/}
        {/*<div className="fixed bg-gradient-to-tr bg-[#23252f] z-[-1] inset-0"/>*/}
      {/*inset means top left right bottom 0*/}
      </body>
    </html>
  );
}
