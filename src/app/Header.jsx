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
                <li className="nav-item nav-link">
                  {user.session.user.email[0]}
                </li>

                <li className="nav-item nav-item--notifications">
                  <button className="BtnDefault">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24">
                      <path
                        className="evJ6XQ"
                        fill="currentColor"
                        d="M13.5 19H15a3 3 0 0 1-6 0h1.5a1.5 1.5 0 0 0 3 0z"
                      />
                      <path
                        className="x9EzJQ"
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M20.04 17.5h.21a.75.75 0 1 1 0 1.5H3.75a.75.75 0 1 1 0-1.5h.21c1-1.15 1.82-2.7 1.82-5.97v-1.3a6.22 6.22 0 0 1 4.87-6.08 1.5 1.5 0 1 1 2.7 0 6.22 6.22 0 0 1 4.87 6.07v1.3c0 3.27.83 4.82 1.82 5.98zm-1.87 0c-.99-1.52-1.45-3.3-1.45-5.97v-1.3a4.72 4.72 0 0 0-9.44 0v1.3c0 2.67-.46 4.45-1.45 5.97h12.34z"
                      />
                    </svg>
                  </button>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                    }}
                    className="nav-link BtnDefault"
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
