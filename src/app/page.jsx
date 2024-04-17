"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./Hero";
import { Lato } from "next/font/google";

import About from "./About";
import Features from "./Features";
import Footer from "./Footer";
import EmailSignup from "./EmailSignup";
import FAQ from "./FAQ";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    console.log("home use effect");

    (async () => {
      console.log("start");
      const AOS = await import("aos");
      console.log("use effect", window.AOS);
      AOS.init();
    })();
  }, []);

  return (
    <main className={lato.className}>
      <Hero></Hero>
      <Features></Features>
      <About></About>
      <FAQ></FAQ>
      <EmailSignup></EmailSignup>
      <Footer></Footer>
    </main>
  );
}
