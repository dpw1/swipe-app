"use client";
import React, { useEffect, useState } from "react";
import { Lato } from "next/font/google";
import Footer from "../Footer";

// import AOS from "aos";

import MyTests from "../MyTests";
import Header from "../Header";
import { useAuthStore } from "../store/authStore";

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
      <Header sticky={false} />

      {user === null ? (
        <>
          <div className="container">
            <p>Loading</p>
          </div>
        </>
      ) : user === false ? (
        <>
          <div className="container">
            <p>User is not authenticated</p>
          </div>
        </>
      ) : (
        <>
          <MyTests />
        </>
      )}

      {/* <Footer></Footer> */}
    </main>
  );
}
