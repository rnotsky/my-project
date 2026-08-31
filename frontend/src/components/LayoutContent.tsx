"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();


  const hideLayout =
    pathname === "/verify-email";


  return (
    <>

      {!hideLayout && <Navbar />}


      <main className="flex-1">
        {children}
      </main>


      {!hideLayout && <Footer />}


    </>
  );
}