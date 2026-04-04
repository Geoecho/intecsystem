import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeReset } from "@/components/theme-reset";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ScrollProgress } from "@/components/scroll-progress";
import { Banner5 } from "@/components/banner5";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - InTec System",
    default: "InTec System | Enterprise IT Solutions",
  },
  description: "InTec System delivers enterprise IT solutions including cloud services, cybersecurity, IT support, and workflow automation across Africa and beyond.",
  icons: {
    icon: "/images/logo.svg",
  },
};

import { Footer18 } from "@/components/footer18";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)} style={{ colorScheme: 'light' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeReset />
        <ScrollToTop />
        <main className="flex-1">
          {children}
        </main>
        <Footer18 />
        <Banner5 />
        <ScrollProgress />
      </body>
    </html>
  );
}
