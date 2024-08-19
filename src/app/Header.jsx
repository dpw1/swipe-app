import React, { useEffect, useState } from "react";
import "./Header.scss";
import Link from "next/link";
import { scrollToSubscribe } from "./utils";
import { useAuthStore } from "./store/authStore";
import { logout } from "./services/auth";

export default function Header(props) {
  const { sticky } = props;

  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    <nav
      className={`f
    Header navbar navbar-expand-md main-nav navigation sidebar-left

    ${sticky ? "fixed-top" : ""}
    `}>
      <div className="container">
        {/* <button className="navbar-toggler" type="button">
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button> */}

        <Link className="navbar-brand" href={"/"}>
          {" "}
          RateMyPicture
        </Link>

        <div className="collapse navbar-collapse" id="main-navbar">
          <div className="sidebar-brand">
            <a href="index.html">
              <img src="img/logo.png" alt="Laapp Template" className="logo" />
            </a>
          </div>

          <ul className="nav navbar-nav ml-auto">
            {/* <li className="nav-item">
              <a className="nav-link scrollto" href="#trial">
                My pictures
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link scrollto" href="/app">
                Vote
              </Link>
            </li> */}
            {user ? (
              <>
                <li className="nav-item nav-link">{user.session.user.email}</li>
                <li className="nav-item">
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                    }}
                    className="nav-link"
                    href="/sign-up">
                    Log out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   scrollToSubscribe();
                    // }}
                    className="nav-link"
                    href="/sign-up">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
