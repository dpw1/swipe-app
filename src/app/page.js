"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./Hero";
import { Lato } from "next/font/google";
import AOS from "aos";
import About from "./About";

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
      {/* <About></About> */}
    </main>
  );
}
