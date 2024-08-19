"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./Hero";
import { Lato } from "next/font/google";

import About from "./About";
import Features from "./Features";
import Footer from "./Footer";
import EmailSignup from "./EmailSignup";
import FAQ from "./FAQ";

import Header from "./Header";
import { createClient } from "@supabase/supabase-js";
import { useAuthStore } from "./store/authStore";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const [facebookUser, setFacebookUser] = useState(null);
  const { isUserLoggedIn, setUser } = useAuthStore();
  // Create a single supabase client for interacting with your database

  useEffect(() => {
    (async () => {
      console.log("start");
      const AOS = await import("aos");
      console.log("use effect", window.AOS);
      AOS.init();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await isUserLoggedIn();
    })();
  }, []);

  return (
    <main className={lato.className}>
      <Header sticky={false}></Header>
      <Hero></Hero>
      <Features></Features>
      <About></About>
      <FAQ></FAQ>
      <EmailSignup></EmailSignup>
      <Footer></Footer>
    </main>
  );
}
