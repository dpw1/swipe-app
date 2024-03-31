"use client";
import React, { useEffect } from "react";
import { Lato } from "next/font/google";
import Footer from "../Footer";

// import AOS from "aos";

import SwipeApp from "../SwipeApp";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export default function App() {
  useEffect(() => {
    // if (window !== undefined) {
    //   const AOS = (await import("aos")).default;
    //   AOS.init();
    // }
  }, []);

  return (
    <main className={lato.className}>
      <SwipeApp></SwipeApp>

      {/* <Footer></Footer> */}
    </main>
  );
}
