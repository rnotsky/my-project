import type { Metadata } from "next";

import { Space_Grotesk, Geist } from "next/font/google";

import GoogleProvider from "@/components/providers/GoogleProvider";

import "./globals.css";

import { Toaster } from "sonner";

import { cn } from "@/lib/utils";

import { AuthProvider } from "@/context/AuthContext";

import LayoutContent from "@/components/LayoutContent";


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});


export const metadata: Metadata = {

  title: "Rnotsky",

  description:
    "Building Tomorrow's Technology",

  icons: {

    icon: "/icon.png",

    shortcut: "/icon.png",

    apple: "/icon.png",

  },

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html

      lang="en"

      className={cn(
        "font-sans",
        geist.variable
      )}

    >


      <body

        className={`
          ${spaceGrotesk.className}
          min-h-screen
          flex
          flex-col
          bg-black
        `}

      >


        <GoogleProvider>


          <AuthProvider>


            <LayoutContent>

              {children}

            </LayoutContent>



            <Toaster

              position="top-center"

              theme="dark"

              duration={1000}

            />


          </AuthProvider>


        </GoogleProvider>


      </body>


    </html>

  );

}