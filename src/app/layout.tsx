import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Instrument_Sans, Baloo_Da_2, Pacifico } from 'next/font/google';
import Footer from "@/components/Footer";


const instrumental = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrumental',
  display: 'swap',
});

const baloo = Baloo_Da_2({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-baloo',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
  display: 'swap',
});



export const metadata: Metadata = {
  title: "The Study Campus",
  description: "A Play School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumental.variable} ${baloo.variable} ${pacifico.variable}`}>
      <body className="font-baloo">
      <Navbar/>
        {children}
      <Footer/>  
      </body>
    </html>
  );
}
