import React, { useEffect } from "react";
import "./Footer.scss";
import Link from "next/link";
import { ROUTES } from "./utils";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="Footer site-footer section bg-dark text-contrast edge top-left">
        <div className="container py-3">
          {/* <div className="row gap-y text-center text-md-left">
            <div className="col-md-4 mr-auto">
              <img src="img/logo-light.png" alt="" className="logo" />
              <p>RateMyPicture.app</p>
            </div>
            <div className="col-md-4">
              <nav className="nav flex-column">
                <a className="nav-item py-2 text-contrast" href="#">
                  About
                </a>
                <a className="nav-item py-2 text-contrast" href="#">
                  Services
                </a>
                <a className="nav-item py-2 text-contrast" href="#">
                  Blog
                </a>
              </nav>
            </div>
            <div className="col-md-4">
              <nav className="nav flex-column">
                <a className="nav-item py-2 text-contrast" href="#">
                  Features
                </a>
                <a className="nav-item py-2 text-contrast" href="#">
                  API
                </a>
                <a className="nav-item py-2 text-contrast" href="#">
                  Customers
                </a>
              </nav>
            </div>
            {/* <div className="col-md-2">
              <nav className="nav flex-column">
                <a className="nav-item py-2 text-contrast" href="#">
                  Careers
                </a>
                <a className="nav-item py-2 text-contrast" href="#">
                  Contact
                </a>
                <a className="nav-item py-2 text-contrast" href="#">
                  Search
                </a>
              </nav>
            </div> 
         <div className="col-md-2">
              <h6 className="py-2 small">Follow us</h6>
              <nav className="nav justify-content-around">
                <a
                  href="#"
                  target="_blank"
                  className="btn btn-circle btn-sm brand-facebook">
                  <i className="fab fa-facebook" />
                </a>
                <a href="#" className="btn btn-circle btn-sm brand-twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="btn btn-circle btn-sm brand-instagram">
                  <i className="fab fa-instagram" />
                </a>
              </nav>
            </div>
          </div> */}
          <hr className="mt-5 op-5" />
          <div className="row small row--bottom">
            <div className="col-md-4 row-item">
              <p className="mt-2 mb-0 text-center text-md-left">
                © {new Date().getFullYear()} <a href="#">RateMyPicture.app</a>.
                All Rights Reserved
              </p>
            </div>
            <div className="col-md-4 row-item">
              <Link href={ROUTES.privacyPolicy}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
