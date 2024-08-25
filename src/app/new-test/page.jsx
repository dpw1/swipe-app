"use client";
import React, { useEffect, useState } from "react";
import { Lato } from "next/font/google";
import Footer from "../Footer";

// import AOS from "aos";

import Header from "../Header";
import { useAuthStore } from "../store/authStore";
import NewTest from "../NewTest";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export default function App() {
  const [user, setUser] = useState(null);
  const { isUserLoggedIn } = useAuthStore();

  useEffect(() => {
    (async () => {
      const _user = await isUserLoggedIn();

      setUser(_user);
    })();
  }, []);

  return (
    <main className={lato.className}>
      {!user ? (
        <>
          <div className="container">
            <p>Loading</p>
          </div>
        </>
      ) : (
        <>
          {" "}
          <Header sticky={false}></Header>
          <NewTest user={user}></NewTest>
        </>
      )}
      {/* <Footer></Footer> */}
    </main>
  );
}
