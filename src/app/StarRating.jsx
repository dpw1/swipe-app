import React, { useState } from "react";

import "./StarRating.scss";
export default function StarRating(props) {
  const { star: active, setStar: setActive } = props;

  const fillColorArray = [
    "#f17a45",
    "#f19745",
    "#f1a545",
    "#f1b345",
    "#f1d045",
  ];

  const ATTRACTIVE_RATING = [
    { rating: 1, text: "Not my type" },
    { rating: 2, text: "Average" },
    { rating: 3, text: "Cute" },
    { rating: 4, text: "Very attractive" },
    { rating: 5, text: "Gorgeous!" },
  ];

  function handleClick(e) {
    const value = parseInt(e.target.getAttribute("value"));
    setActive(value);
  }

  function removeAllHoveredAndActive() {
    const $hovered = document.querySelectorAll(
      `.StarRating-star--hovered, .StarRating-star--active`,
    );

    if ($hovered) {
      for (var each of $hovered) {
        each.classList.remove(`StarRating-star--hovered`);
        each.classList.remove(`StarRating-star--active`);
      }
    }
  }

  function selectStar(star = 1) {
    const $this = document.querySelector(`.StarRating-star[value='${star}']`);

    if (!$this) {
      return;
    }

    let sibling = $this.previousElementSibling;
    const siblings = [];

    while (sibling) {
      try {
        siblings.push(sibling);
        sibling = sibling.previousElementSibling;
      } catch (err) {}
    }

    for (var each of siblings) {
      each.classList.add(`StarRating-star--hovered`);
    }

    $this.classList.add(`StarRating-star--active`);
  }

  function handleHover(e) {
    removeAllHoveredAndActive();

    const $this = e.target;

    let sibling = $this.previousElementSibling;
    const siblings = [];

    while (sibling) {
      try {
        siblings.push(sibling);
        sibling = sibling.previousElementSibling;
      } catch (err) {}
    }

    for (var each of siblings) {
      each.classList.add(`StarRating-star--hovered`);
    }
  }

  function handleMouseLeave(e) {
    removeAllHoveredAndActive();
    selectStar(active);
    console.log("active: ", active);
  }

  return (
    <div className="StarRating">
      <div className="StarRating-rating">
        {ATTRACTIVE_RATING.find((e) => e.rating === active).text}
      </div>

      <div className="StarRating-wrapper">
        {[...Array(5)].map((_, i) => {
          const value = i + 1;
          return (
            <>
              <svg
                key={i}
                className={`
                StarIcon
                StarRating-star ${
                  value <= active ? "StarRating-star--active" : ""
                }`}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                width={50}
                height={50}
                value={value}
                xmlns="http://www.w3.org/2000/svg"
                onClick={(e) => {
                  handleClick(e);
                }}
                onMouseEnter={(e) => {
                  handleHover(e);
                }}
                onMouseLeave={(e) => {
                  handleMouseLeave(e);
                }}>
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </>
          );
        })}
      </div>
    </div>
  );
}
