import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
//import { AOSInit, Footer, Navbar } from "@/components";
import { AOSInit } from "@/components";



const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Apex Finances",
  description: "Financial moves you can trust",
  icons:{
    icon:"/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   
  return (
    <html
      lang="en"
      className={`${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <AOSInit/>
        {/* <Navbar/> */}
        {children}
        {/* <Footer/> */}
      </body>
        
    </html>
  );
}
