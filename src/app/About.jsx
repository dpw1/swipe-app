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
                More likes
                <span className="d-block display-md-4 light">
                  less time wasted
                </span>
              </h1>
              <p className="lead">
                Struggling to score matches on dating apps or just not clicking
                with folks? Understanding how strangers view your pics can be a
                game-changer.
              </p>

              <p className="lead">
                Even tiny tweaks can lead to big wins. Give your profile a
                makeover and see it in a whole new light, making those first
                impressions count!
              </p>
              <nav className="nav mt-5">
                <a
                  href="#"
                  className="nav-link mr-3 btn btn btn-rounded btn-contrast">
                  <i className="fas fa-heart mr-3" /> Join Now
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Isometric Mockups */}
      <section className="isometric-mockups">
        <div className="iphone light phone-big">
          <div className="screen">
            <img src="img/screens/app/4.png" alt="..." />
          </div>
          <div className="notch" />
        </div>
      </section>
    </section>
  );
}
