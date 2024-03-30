"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./Hero";
import { Lato } from "next/font/google";
import AOS from "aos";
import About from "./About";
import Features from "./Features";
import Footer from "./Footer";
import EmailSignup from "./EmailSignup";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    return () => {
      AOS.init();
    };
  }, []);

  return (
    <main className={lato.className}>
      <Hero></Hero>
      <Features></Features>
      {/* <About></About> */}
      <EmailSignup></EmailSignup>
      <Footer></Footer>
    </main>
  );
}
