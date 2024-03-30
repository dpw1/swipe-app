import React, { useEffect, useState } from "react";
import "./SwipeApp.scss";
import "hammerjs";

export default function SwipeApp() {
  const [loaded, setLoaded] = useState(false);
  const [moving, setMoving] = useState(false);
  const [moveRight, setMoveRight] = useState(null);

  useEffect(() => {
    // Gets the photo element
    var el = document.querySelector(".photo");
    // Creates the object
    var hammerTime = new Hammer(el);
    // Unlocks vertical pan and pinch
    hammerTime.get("pan").set({ direction: Hammer.DIRECTION_ALL });
    hammerTime.get("pinch").set({ enable: true });

    // When user grabs the photo..
    hammerTime.on("pan", function (ev) {
      // When the photo start moving, the transition become "none" to avoid delay while dragging
      el.classList.add("moving");
      // If the photo go 80px left/right, the "nope"/"like" stamp appears using css::after
      el.classList.toggle("nope", ev.deltaX < -80);
      el.classList.toggle("like", ev.deltaX > 80);
      el.classList.toggle(
        "super_like",
        (ev.deltaY < -72) & (Math.abs(ev.deltaX) < 80),
      );
      // Calculates photo rotation based on offset
      var rotate = ev.deltaX * ev.deltaY * 4e-4;
      // And applies the movement
      el.style.transform =
        "translate(" +
        ev.deltaX +
        "px, " +
        ev.deltaY +
        "px) rotate(" +
        rotate +
        "deg)";
    });

    // When user releases the photo..
    hammerTime.on("panend", function (ev) {
      // Gets the positive value of velocity and X-deslocation
      var absVel = Math.abs(ev.velocity);
      var absDelX = Math.abs(ev.deltaX);
      // Removes the stamps and retrieve the 300ms transition
      el.classList.remove("nope", "like", "super_like", "moving");
      if (absDelX > 80) {
        // If the photo had a "like"/"dislike" reaction
        // Photo fades faster if dragged faster, beetwen 400 and 150ms
        var transitionDuration =
          250 / (absVel + 0.4) > 150
            ? 250 / (absVel + 0.4) > 400
              ? 400
              : 250 / (absVel + 0.4)
            : 150;
        el.style.transitionDuration = transitionDuration + "ms";
        var rotate = ev.deltaX * ev.deltaY * 4e-4;
        // And is thrown farther too
        var mult = absVel > 1.4 ? absVel : 1.4;
        el.style.transform =
          "translate(" +
          ev.deltaX * 1.4 * mult +
          "px, " +
          ev.deltaY * mult +
          "px) rotate(" +
          rotate * mult +
          "deg)";
        // Fade out
        el.style.opacity = 0;
        // And the photo returns
        repeat(transitionDuration);
      } else if (ev.deltaY < -72) {
        // If the photo had a "super like" reaction, very similar code to the previous one
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
        repeat(transitionDuration);
      } else {
        // If the photo didn't have a reaction, it goes back to the middle
        el.style.transform = "";
      }
    });

    hammerTime.on("pinch", function (ev) {
      el.style.transitionDuration = "0ms";
      el.style.transform = "scale(" + ev.scale + ")";
    });

    hammerTime.on("pinchend", function (ev) {
      el.style.transform = "scale(1)";
    });

    // The function that brings back the photo
    function repeat(transitionDuration = 350) {
      setTimeout(function () {
        el.style.transform = "";
        setTimeout(function () {
          el.classList.remove("nope", "like", "super_like", "moving");
          el.style.opacity = 1;
        }, transitionDuration);
      }, transitionDuration);
    }

    // The "like" and "dislike" animation
    function buttonEvent(reaction) {
      // Random transition duration beetwen 300ms and 600ms
      var transitionDuration = Math.random() * 300 + 300;
      el.style.transitionDuration = transitionDuration + "ms";
      // Random X-deslocation beetwen 100px and 400px
      var x = Math.random() * 300 + 100;
      // Random Y-deslocation beetwen -200px and 200px
      var y = Math.random() * 400 - 200;
      var rotate = x * y * 4e-4;
      if (reaction == "like") {
        // If the reaction was a "like", stamps "like"
        el.classList.toggle("like");
      } else if (reaction == "dislike") {
        // If the reaction was a "dislike", stamps "nope" and moves the photo to the left
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

    // Creates button actions
    document
      .querySelector(".fa-close")
      .parentNode.addEventListener("click", function () {
        buttonEvent("dislike");
      });

    document
      .querySelector(".fa-star")
      .parentNode.addEventListener("click", function () {
        buttonEvent("super_like");
      });

    document
      .querySelector(".fa-heart")
      .parentNode.addEventListener("click", function () {
        buttonEvent("like");
      });

    // Clock
    var clockTicking = setInterval(clock, 1000);
    function clock() {
      var d = new Date(),
        displayDate;
      displayDate = d.toLocaleTimeString();
      document.querySelector(".clock").innerHTML = displayDate.substring(0, 5);
    }
  }, []);

  return (
    <div className="SwipeApp">
      <>
        <div className="smartphone">
          <div className="screen">
            <div className="topbar">
              <div className="topbar-left">
                <div className="clock">00:00</div>
                <i className="fa fa-youtube-play" />
              </div>
              <div className="topbar-middle">
                <div className="camera" />
                <div className="camera-lens" />
                <div className="inner-lens" />
              </div>
              <div className="topbar-right">
                <i className="fa fa-signal" />
                73%
                <i className="fa fa-battery-three-quarters" />
              </div>
            </div>
            <nav className="navbar">
              <i className="fa-solid fa-circle-user" />
              <i className="fa-solid fa-fire-flame-curved" />
              <i className="fa-solid fa-comment-dots" />
            </nav>
            <div className="person">
              <figure className="photo">
                <div className="personal">
                  <div className="name-age">
                    <h2 className="name">Lorem</h2>
                    <h2 className="age">26</h2>
                  </div>
                  <div className="data">
                    <div className="about">
                      <div className="about-icon">
                        <i className="fa-solid fa-suitcase" />
                        <i className="fa-solid fa-graduation-cap" />
                        <i className="fa-solid fa-location-dot" />
                      </div>
                      <div className="about-text">
                        <p>Designer</p>
                        <p>Stanford University</p>
                        <p>4 miles away</p>
                      </div>
                    </div>
                    <div className="info">
                      <i className="fa-solid fa-circle-info" />
                    </div>
                  </div>
                </div>
              </figure>
            </div>
            <div className="commands">
              <div className="command">
                <i className="fa-solid fa-arrow-rotate-left" />
              </div>
              <div className="command">
                <i className="fa-solid fa-close" />
              </div>
              <div className="command">
                <i className="fa-solid fa-star" />
              </div>
              <div className="command">
                <i className="fa-solid fa-heart" />
              </div>
              <div className="command">
                <i className="fa-solid fa-bolt" />
              </div>
            </div>
            <footer>
              <i className="fa fa-reorder" />
              <i className="fa fa-square-o" />
              <i className="fa fa-chevron-left" />
            </footer>
          </div>
        </div>
        {/* Font Awesome */}
      </>
    </div>
  );
}
