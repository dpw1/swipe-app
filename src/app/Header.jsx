import React, { useEffect, useState } from "react";
import "./Header.scss";
import Link from "next/link";
import { scrollToSubscribe } from "./utils";
import { useAuthStore } from "./store/authStore";
import { logout } from "./services/auth";

export default function Header(props) {
  const { sticky } = props;
  const { isUserLoggedIn } = useAuthStore();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const _user = await isUserLoggedIn();
      setUser(_user);
    })();
  }, [user]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItems = () => (
    <>
      {user ? (
        <>
          <li className="nav-item nav-link">{user.email[0]}</li>
          <li className="nav-item nav-item--notifications">
            <button className="btn--default ">
              <svg
                className="icon--notification"
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
              className="nav-link btn--default"
              href="/sign-up">
              Log out
            </Link>
          </li>
        </>
      ) : (
        <li className="nav-item">
          <Link className="nav-link" href="/sign-up">
            Sign Up
          </Link>
        </li>
      )}
    </>
  );

  return (
    <nav
      className={`
        Header navbar navbar-expand-md main-nav navigation sidebar-left
        ${sticky ? "fixed-top" : ""}
      `}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          RateMyPicture
        </Link>

        <button
          className="navbar-toggler d-md-none"
          type="button"
          onClick={toggleMenu}>
          {!isMenuOpen ? (
            <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <div
          className="collapse navbar-collapse d-none d-md-flex"
          id="main-navbar">
          <ul className="nav navbar-nav ml-auto">
            <NavItems />
          </ul>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu d-md-none ${isMenuOpen ? "show" : ""}`}>
          <ul className="nav navbar-nav">
            <NavItems />
          </ul>
        </div>
      </div>
    </nav>
  );
}
