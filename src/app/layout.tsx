import type { Metadata } from "next";
import {Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MarqueeScroll from "@/components/MarqueeScroll";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const notoSerifBengali = Noto_Serif_Bengali({
  
  subsets: ["latin", "bengali"],
});


export const metadata: Metadata = {
  title: "বাজার দর",
  description: "বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${notoSerifBengali.className} h-full antialiased scroll-smooth`}
    >
      <body className="bg-[#f0f5f0] min-h-full flex flex-col">
        <Header/>
        <MarqueeScroll/>
        <main className=" w-full max-w-6xl mx-auto">{children}</main>
        <Toaster/>
        <Footer/>
      </body>
    </html>
  );
}
