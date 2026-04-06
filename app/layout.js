import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Naviagation/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Granest",
  description: "Discover Granest, your ultimate destination for exclusive and trend-forward collections designed to elevate your everyday lifestyle. At Granest, we blend modern aesthetics with premium quality, delivering products that stand out in both design and durability.From fashion-forward apparel to curated lifestyle essentials, every Granest product is crafted with attention to detail, ensuring you experience luxury, comfort, and uniqueness in every purchase.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
