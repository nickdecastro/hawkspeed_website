import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HawkSpeed",
  description: "Games and game guides from HawkSpeed.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 px-6 py-10">
          <div className="mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-white/3 px-6 py-10 sm:px-10">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
