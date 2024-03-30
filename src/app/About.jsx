import React, { useEffect } from "react";
import "./About.scss";

export default function About() {
  return (
    <section className="About">
      {/* Alternative 3 Heading */}
      <header
        className="header alter3-header section gradient gradient-primary-auxiliary text-contrast"
        id="home">
        <div className="shapes-container">
          <div className="animation-shape shape-ring animation--rotating-diagonal">
            <div />
          </div>
          <div className="animation-shape shape-circle animation--clockwise">
            <div />
          </div>
          <div className="animation-shape shape-triangle animation--anti-clockwise">
            <div className="animation--rotating" />
          </div>
          <div className="animation-shape shape-diamond animation--anti-clockwise">
            <div className="animation--rotating" />
          </div>
          <div className="static-shape shape-ring-1" />
          <div className="static-shape shape-ring-2" />
          <div className="static-shape shape-circle-1" />
          <div className="static-shape pattern-dots-1" />
          <div className="static-shape pattern-dots-2" />
          <div className="static-shape ghost-shape ghost-shape-1" />
        </div>
        <div className="container bring-to-front">
          <div className="row">
            <div className="col-md-6">
              <h1 className="extra-bold display-md-3 font-md">
                A new way
                <span className="d-block display-md-4 light">
                  to showcase your app
                </span>
              </h1>
              <p className="lead">
                Your amazing product deserves an outstanding way to show it.
                Dashcore will provide you with a quality template no matter what
                your idea is about.
              </p>
              <nav className="nav mt-5">
                <a
                  href="#"
                  className="nav-link mr-3 btn btn btn-rounded btn-contrast">
                  <i className="fas fa-tag mr-3" /> Plans &amp; pricing{" "}
                </a>
                <a
                  href="#"
                  className="nav-link btn btn-rounded btn-outline-contrast">
                  Start now
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Isometric Mockups */}
      <section className="isometric-mockups">
        <div className="tablet ipad landscape">
          <div className="screen">
            <img src="img/screens/tablet/1.png" alt="..." />
          </div>
          <div className="button" />
        </div>
        <div className="iphone light phone-big">
          <div className="screen">
            <img src="img/screens/app/4.png" alt="..." />
          </div>
          <div className="notch" />
        </div>
        <div className="iphone light phone-small">
          <div className="screen">
            <img src="img/screens/app/2.png" alt="..." />
          </div>
          <div className="notch" />
        </div>
        <div className="tablet ipad portrait">
          <div className="screen">
            <img src="img/screens/tablet/2.png" alt="..." />
          </div>
          <div className="button" />
        </div>
      </section>
    </section>
  );
}
