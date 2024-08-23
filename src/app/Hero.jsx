import React, { useEffect, useState } from "react";
import "./Hero.scss";
import Header from "./Header";
import { getMedia, scrollToSubscribe } from "./utils";
import TextLoop from "./TextLoop";

export default function Hero() {
  const words = ["Instagram", "Tinder", "Facebook", "Bumble"];

  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="Hero header alter2-header section" id="home">
      <div className="shapes-container">
        {/* diagonal shapes */}
        <div
          className="shape shape-animated"
          data-aos="fade-down-right"
          data-aos-duration={1500}
          data-aos-delay={100}
        />
        <div
          className="shape shape-animated"
          data-aos="fade-down"
          data-aos-duration={1000}
          data-aos-delay={100}></div>
        <div
          className="shape shape-animated"
          data-aos="fade-up-left"
          data-aos-duration={500}
          data-aos-delay={200}></div>
        <div
          className="shape shape-animated"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-delay={200}
        />
        <div
          className="shape shape-animated"
          data-aos="fade-up-right"
          data-aos-duration={1000}
          data-aos-delay={200}
        />
        <div
          className="shape shape-animated"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={200}></div>
        <div
          className="shape shape-animated"
          data-aos="fade-down-left"
          data-aos-duration={1000}
          data-aos-delay={100}
        />
        <div
          className="shape shape-animated"
          data-aos="fade-down-left"
          data-aos-duration={1000}
          data-aos-delay={100}
        />
        <div
          className="diag shape shape-animated"
          data-aos="zoom-in"
          data-aos-duration={1000}
          data-aos-delay={300}></div>
        {/* animated shapes */}
        <div className="animation-shape shape-ring animation--clockwise" />
        <div className="animation-shape shape-circle shape-circle-1 animation--anti-clockwise" />
        <div className="animation-shape shape-circle shape-circle-2 animation--clockwise" />
        <div className="animation-shape shape-heart animation--clockwise">
          <div className="animation--rotating" />
        </div>
        <div className="animation-shape shape-triangle animation--rotating-diagonal">
          <div className="animation--rotating" />
        </div>
        <div className="animation-shape shape-diamond animation--anti-clockwise">
          <div className="animation--rotating" />
        </div>
        {/* static shapes */}
        <div className="static-shape shape-ring-1" />
        <div className="static-shape shape-ring-2" />
        <div className="static-shape shape-circle shape-circle-1">
          <div data-aos="fade-down-left" />
        </div>
        <div className="static-shape shape-circle shape-circle-2">
          <div data-aos="fade-down-left" data-aos-delay={500} />
        </div>
        <div className="static-shape pattern-dots-1" />
        <div className="static-shape pattern-dots-2" />
        {/* main shape */}
        <div className="static-shape background-shape-main" />
        {/* ghost shapes */}
        <div className="static-shape ghost-shape ghost-shape-1" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 Hero-top">
            <span className="rounded-pill shadow-box bg-contrast text-dark bold py-2 px-4">
              <i className="far fa-lightbulb text-primary mr-2" />{" "}
              <span className="text-primary">Real</span> people, no AI
            </span>
            <h1 className="display-4 display-md-2 mt-3 text-h2">
              <span className="bold">
                Do people find you attractive on your
              </span>
              <br />
              <span className="bold Hero-animated-text-wrapper">
                <span className="animated-text">
                  <div>
                    <TextLoop duration={1500}>
                      {words.map((e) => (
                        <span key={e}>
                          <u>{e}</u>
                        </span>
                      ))}
                    </TextLoop>
                  </div>

                  <span style={{ marginLeft: 10 }}>pictures?</span>
                </span>
              </span>
            </h1>

            <p className="lead">
              Receive kind-hearted, genuine feedback on your social & dating
              pictures from real users around the world.
            </p>
            <nav className="nav my-5">
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSubscribe();
                }}
                className="btn btn-rounded btn-alternate mr-2 mr-md-5">
                Join Now
                <i className="fas fa-long-arrow-alt-right ml-2" />
              </a>{" "}
            </nav>
          </div>
          <div className="col-md-4">
            <div className="iphone front mx-auto">
              <div className="screen shadow-box">
                <video
                  playsInline
                  loop
                  muted
                  autoPlay
                  preload={"auto"}
                  poster={getMedia(`/video_thumbnail.png`)}
                  onCanPlayThrough={() => {
                    setIsLoading(false);
                  }}
                  src={getMedia(`/videos/swipe-me-vid-1.webm`)}></video>
              </div>
              <div className="notch" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
