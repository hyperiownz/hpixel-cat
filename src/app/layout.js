import { Inter } from "next/font/google";
import { pixelFonts } from "./PixelFonts";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import SearchBar from "@/components/searchbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HPixel hotel",
  description: "By Miracle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className={`${inter.className} bg-white  m-0  `}>
        <Navbar />
        {children}

      </body>
    </html>
  );
}
