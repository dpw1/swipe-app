import React, { useEffect } from "react";
import "./Header.scss";
import Link from "next/link";
import { scrollToSubscribe } from "./utils";

Link;

export default function Header() {
  return (
    <nav className="Header navbar navbar-expand-md main-nav navigation fixed-top sidebar-left">
      <div className="container">
        {/* <button className="navbar-toggler" type="button">
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button> */}
        <a href="#main" className="navbar-brand">
          RateMyPicture
        </a>
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

            <li className="nav-item">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSubscribe();
                }}
                className="nav-link scrollto"
                href="#trial">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
