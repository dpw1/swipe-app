"use client";

import React, { useEffect, useState } from "react";
import "./SwipeApp.scss";

import { sortArrayAlphabetically } from "./utils";
import Progress from "./Progress";
import StarRating from "./StarRating";

export default function SwipeApp() {
  const [step, setStep] = useState(1);
  const [like, setLike] = useState(null); // dislike, like, superlike
  const [rate, setRate] = useState(1);
  const [star, setStar] = useState(1);

  const ASPECT_RATIO = "square";

  const user = {
    id: 123,
    name: "Lorem",
    age: 26,
    picture: `https://i.pinimg.com/originals/55/91/80/5591809ff56c527ff1897828d2fb3290.jpg`,
  };

  const SWIPE_DISTANCE_Y = -72;
  const SWIPE_DISTANCE_X = 120;

  const POSITIVE_FEEDBACK_TEXT = `Remeber: your feedback is valuable.`;
  const NEGATIVE_FEEDBACK_TEXT = `Remeber: treat others as you'd want to be treated.`;

  const POSITIVE_REASONS = sortArrayAlphabetically([
    "😍 cute",
    "🥵 hot",
    "outfit",
    "😎 stylish",
    "elegant",
    "cool background",
    "smile",
    "hair",
    "social",
  ]);

  const NEGATIVE_REASONS = sortArrayAlphabetically([
    "angle",
    "background",
    "blurry",
    "bright",
    "can't see face",
    "clothes",
    "bad image quality",
    "crop",
    "dark picture",
    "expression",
    "no eye contact",
    "filter/effects",
    "hair",
    "multiple people",
    "pose",
    "posture",
    "selfie",
    "shadows",
    "smile less",
    "smile more",
    "sunglasses",
    "too close-up",
    "too far away",
    "too much skin",
  ]);

  useEffect(() => {
    (async () => {
      if (window === undefined) {
        return;
      }
      await import(`hammerjs`);

      var el = document.querySelector(".photo");
      var hammerTime = new Hammer(el);
      hammerTime.get("pan").set({ direction: Hammer.DIRECTION_ALL });
      hammerTime.get("pinch").set({ enable: true });

      hammerTime.on("pan", function (ev) {
        el.classList.add("moving");

        el.classList.toggle("nope", ev.deltaX < -120);
        el.classList.toggle("like", ev.deltaX > 120);
        el.classList.toggle(
          "super_like",
          (ev.deltaY < -72) & (Math.abs(ev.deltaX) < 80),
        );
        var rotate = ev.deltaX * ev.deltaY * 4e-4;
        el.style.transform =
          "translate(" +
          ev.deltaX +
          "px, " +
          ev.deltaY +
          "px) rotate(" +
          rotate +
          "deg)";
      });

      hammerTime.on("panend", function (ev) {
        var absVel = Math.abs(ev.velocity);
        var absDelX = Math.abs(ev.deltaX);

        el.classList.remove("nope", "like", "super_like", "moving");

        if (absDelX > SWIPE_DISTANCE_X) {
          var transitionDuration =
            250 / (absVel + 0.4) > 150
              ? 250 / (absVel + 0.4) > 400
                ? 400
                : 250 / (absVel + 0.4)
              : 150;
          el.style.transitionDuration = transitionDuration + "ms";
          var rotate = ev.deltaX * ev.deltaY * 4e-4;
          var mult = absVel > 1.4 ? absVel : 1.4;
          el.style.transform =
            "translate(" +
            ev.deltaX * 1.4 * mult +
            "px, " +
            ev.deltaY * mult +
            "px) rotate(" +
            rotate * mult +
            "deg)";
          el.style.opacity = 0;

          if (ev.deltaX > 0) {
            setLike("like");
          } else if (ev.deltaX < 0) {
            setLike("dislike");
          }
          repeat(transitionDuration);
        } else if (ev.deltaY < SWIPE_DISTANCE_Y) {
          var transitionDuration =
            250 / (absVel + 0.4) > 150
              ? 250 / (absVel + 0.4) > 400
                ? 400
                : 250 / (absVel + 0.4)
              : 150;
          el.style.transitionDuration = transitionDuration + "ms";
          var mult = absVel > 2 ? absVel : 2;
          el.style.transform = "translate( 0px, " + ev.deltaY * mult + "px)";
          el.style.opacity = 0;

          setLike("superlike");
          repeat(transitionDuration);
        } else {
          el.style.transform = "";
          setLike(null);
        }
      });

      hammerTime.on("pinch", function (ev) {
        el.style.transitionDuration = "0ms";
        el.style.transform = "scale(" + ev.scale + ")";
      });

      hammerTime.on("pinchend", function (ev) {
        el.style.transform = "scale(1)";
      });

      function repeat(transitionDuration = 350) {
        setTimeout(function () {
          setStep(2);
          document.querySelector(`.person`).scrollTo({ top: 0 });
        }, transitionDuration);
        return;
      }

      function restart(transitionDuration = 350) {
        setTimeout(function () {
          el.style.transform = "";
          setTimeout(function () {
            el.classList.remove("nope", "like", "super_like", "moving");
            el.style.opacity = 1;
          }, transitionDuration);
        }, transitionDuration);
      }

      function buttonEvent(reaction) {
        var transitionDuration = Math.random() * 300 + 300;
        el.style.transitionDuration = transitionDuration + "ms";
        var x = Math.random() * 300 + 100;
        var y = Math.random() * 400 - 200;
        var rotate = x * y * 4e-4;
        if (reaction == "like") {
          el.classList.toggle("like");
        } else if (reaction == "dislike") {
          el.classList.toggle("nope");
          x *= -1;
        } else if (reaction == "super_like") {
          el.classList.toggle("super_like");
          x = rotate = 0;
          y = y < 0 ? y * 3 : -y * 3;
        }
        el.style.transform =
          "translate(" + x + "px, " + y + "px) rotate(" + rotate + "deg)";
        el.style.opacity = 0;
        repeat(transitionDuration * 0.8);
      }

      document
        .querySelector(`.command--redo`)
        .addEventListener(`click`, function () {
          setStep(1);
          restart(0);
          document.querySelector(`.person`).scrollTo({ top: 0 });
        });

      document
        .querySelector(".fa-close")
        .parentNode.addEventListener("click", function () {
          buttonEvent("dislike");
          setLike("dislike");
        });

      document
        .querySelector(".fa-star")
        .parentNode.addEventListener("click", function () {
          buttonEvent("super_like");
          setLike("superlike");
        });

      document
        .querySelector(".fa-heart")
        .parentNode.addEventListener("click", function () {
          buttonEvent("like");
          setLike("like");
        });
    })();
  }, []);

  return (
    <div
      className={`SwipeApp SwipeApp--step-${step} SwipeApp--aspect-ratio-${ASPECT_RATIO}
      
      ${step >= 2 && "SwipeApp--nextStep"}
      
      `}>
      <>
        <div className="smartphone">
          <div className="screen">
            <div className="person">
              <figure
                className="photo SwipeApp-swipable-photo"
                style={{
                  background: `url("${user.picture}")
              center center/cover`,
                }}>
                <div className="personal">
                  <div className="name-age">
                    <h2 className="name">Lorem,</h2>
                    <h2 className="age">26</h2>
                  </div>
                </div>
              </figure>
              {step === 2 ? (
                <div className={`nextStep nextStep--${like}`}>
                  <img className="nextStep-photo" src={user.picture} alt="" />

                  <h3 className="nextStep-title title">
                    What made you{" "}
                    {like === "dislike"
                      ? "swipe left"
                      : like === "like"
                      ? "swipe right"
                      : "super like"}
                    ?
                  </h3>
                  <span className="nextStep-subtitle text-h6">
                    {like === "dislike"
                      ? NEGATIVE_FEEDBACK_TEXT
                      : POSITIVE_FEEDBACK_TEXT}
                  </span>

                  <div className="nextStep-reasons">
                    {like === "dislike"
                      ? NEGATIVE_REASONS.map((group) => (
                          <div key={group.alphabet}>
                            <p className="nextStep-letter text-h6">
                              {group.alphabet.toUpperCase()}
                            </p>
                            <div className="words">
                              {group.words.map((e, index) => (
                                <input
                                  key={e}
                                  type="checkbox"
                                  class="chip grow swatch"
                                  role="switch"
                                  value={`${e}`}
                                  aria-label={`${e}`}
                                />
                              ))}
                            </div>
                          </div>
                        ))
                      : POSITIVE_REASONS.map((group) => (
                          <div key={group.alphabet}>
                            <p className="nextStep-letter text-h6">
                              {group.alphabet.toUpperCase()}
                            </p>
                            <div className="words">
                              {group.words.map((e, index) => (
                                <input
                                  key={e}
                                  type="checkbox"
                                  class="chip grow swatch"
                                  role="switch"
                                  value={`${e}`}
                                  aria-label={`${e}`}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                  </div>
                </div>
              ) : (
                step === 3 && (
                  <div className="nextStep">
                    <img className="nextStep-photo" src={user.picture} alt="" />

                    <h3 className="nextStep-title title">
                      How attractive would you consider this person?
                    </h3>

                    <div className="nextStep-pretty">
                      <StarRating star={star} setStar={setStar}></StarRating>
                    </div>
                  </div>
                )
              )}
            </div>
            <Progress step={step}></Progress>
            <div className="commands">
              <div className="command command--redo">
                <i className="fa fa-arrow-rotate-left">
                  <svg
                    viewBox="0 -256 1792 1792"
                    id="svg3447"
                    version="1.1"
                    width="100%"
                    height="100%">
                    <g
                      transform="matrix(1,0,0,-1,113.89831,1262.6441)"
                      id="g3449">
                      <path
                        d="M 1536,640 Q 1536,484 1475,342 1414,200 1311,97 1208,-6 1066,-67 924,-128 768,-128 589,-128 431.5,-52 274,24 165.5,161 57,298 18,473 q -3,14 7,27 9,12 25,12 h 199 q 23,0 30,-23 Q 329,327 464,227.5 599,128 768,128 872,128 966.5,168.5 1061,209 1130,278 q 69,69 109.5,163.5 40.5,94.5 40.5,198.5 0,104 -40.5,198.5 Q 1199,933 1130,1002 1061,1071 966.5,1111.5 872,1152 768,1152 670,1152 580,1116.5 490,1081 420,1015 L 557,877 q 31,-30 14,-69 -17,-40 -59,-40 H 64 Q 38,768 19,787 0,806 0,832 v 448 q 0,42 40,59 39,17 69,-14 l 130,-129 q 107,101 244.5,156.5 137.5,55.5 284.5,55.5 156,0 298,-61 142,-61 245,-164 103,-103 164,-245 61,-142 61,-298 z"
                        id="path3451"
                        style={{ fill: "currentColor" }}
                      />
                    </g>
                  </svg>
                </i>
              </div>
              <div className="command-votes">
                <div className="command">
                  <i className="fa fa-close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
                    </svg>
                  </i>
                </div>
                <div className="command">
                  <i className="fa fa-star" />
                </div>
                <div className="command">
                  <i className="fa fa-heart"></i>
                </div>
                <button
                  className="submit"
                  onClick={() => {
                    if (step === 2) {
                      setStep(3);
                    }
                  }}>
                  {step === 2 ? "NEXT" : "DONE"}
                </button>
              </div>
              <div className="command">
                <div className="fa fa-skip">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M16 12.6667L5.77735 19.4818C5.54759 19.6349 5.23715 19.5729 5.08397 19.3431C5.02922 19.261 5 19.1645 5 19.0657V4.93426C5 4.65812 5.22386 4.43426 5.5 4.43426C5.59871 4.43426 5.69522 4.46348 5.77735 4.51823L16 11.3333V5C16 4.44772 16.4477 4 17 4C17.5523 4 18 4.44772 18 5V19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19V12.6667Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Font Awesome */}
      </>
    </div>
  );
}
