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

import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://kjsscbcikciebrzjgbcv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqc3NjYmNpa2NpZWJyempnYmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2Mjk0MDAsImV4cCI6MjAzOTIwNTQwMH0.L-8T_MvyqvQcR1dfeTO1Td62SsSadM2qTkZjvkDO0Io",
);

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const [facebookUser, setFacebookUser] = useState(null);

  useEffect(() => {
    console.log("home use effect");

    (async () => {
      console.log("start");
      const AOS = await import("aos");
      console.log("use effect", window.AOS);
      AOS.init();
    })();
  }, []);

  async function signInWithFacebook() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
    });
  }

  return (
    <main className={lato.className}>
      <Hero></Hero>
      <Features></Features>
      <About></About>
      <FAQ></FAQ>
      <EmailSignup></EmailSignup>
      <div style={{ marginBottom: "100vh" }}>
        <p>Login</p>

        {facebookUser ? (
          <div>
            <p>Welcome, {user.email}!</p>
            <button>Sign Out</button>
          </div>
        ) : (
          <button
            onClick={async () => {
              console.log(`click`);
              const { error, session, user } =
                await supabase.auth.signInWithOAuth({
                  provider: "facebook",
                });

              if (error) {
                alert("Something went wrong");
              }

              setFacebookUser(user);

              console.log(`User data`, user, session);

              await supabase.auth.signInWithOAuth({
                provider,
                options: {
                  redirectTo: `https://ratemypicture.app/`,
                },
              });
            }}>
            Sign in with Facebook
          </button>
        )}
      </div>
      <Footer></Footer>
    </main>
  );
}
