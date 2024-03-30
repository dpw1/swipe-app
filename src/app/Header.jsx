import React, { useEffect } from "react";
import "./Header.scss";

export default function Header() {
  return (
    <nav className="Header navbar navbar-expand-md main-nav navigation fixed-top sidebar-left">
      <div className="container">
        <button className="navbar-toggler" type="button">
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="#main" className="navbar-brand">
          <img
            src="img/logo.png"
            alt="Laapp"
            className="logo logo-sticky d-block d-md-none"
          />
          <img
            src="img/logo-light.png"
            alt="Laapp"
            className="logo d-none d-md-block"
          />
        </a>
        <div className="collapse navbar-collapse" id="main-navbar">
          <div className="sidebar-brand">
            <a href="index.html">
              <img src="img/logo.png" alt="Laapp Template" className="logo" />
            </a>
          </div>
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link scrollto" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#product">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#trial">
                Trial
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
