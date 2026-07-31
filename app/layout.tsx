import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {  UiProvider } from "../components/ui/provider"

import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renewable Buddy",
  description: "Your helper to a better energy usage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      suppressHydrationWarning
    >
      <body className=" h-screen w-screen flex flex-col">
        <Providers>
          <UiProvider>

            {children}
          </UiProvider>
        </Providers>
      </body>

    </html>
  );
}
