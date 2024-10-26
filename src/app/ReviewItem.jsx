import React from "react";
import Link from "next/link";

import "./ReviewItem.scss";
import { getMedia } from "./utils";

export default function ReviewItem(props) {
  const { item } = props;

  return (
    <div className="ReviewItem" key={item.id}>
      <div className="ReviewItem-reviewed">
        <Link
          href={`/my-tests/${item.id}`}
          className="ReviewItem-reviewed-figure">
          <img className="ReviewItem-image" src={item.picture} alt="" />
        </Link>

        <div className="ReviewItem-reviewed-data">
          <p className="ReviewItem-reviewed-title">
            <span>{4} votes</span>
            <span>
              {4}{" "}
              <svg
                className="StarIcon ReviewItem-average-rating"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                width={50}
                height={50}
                value={4}
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </span>
          </p>
          <div className="ReviewItem-tabs">
            <a
              href="#"
              className="ReviewItem-tab ReviewItem-tab--active"
              onClick={(e) => {
                e.preventDefault();
                setTab(0);
              }}>
              Swipes
            </a>
            <a
              href="#"
              className="ReviewItem-tab "
              onClick={(e) => {
                e.preventDefault();

                setTab(1);
              }}>
              Feedback
            </a>
          </div>
          <ul>
            {item.voters.map((e) => {
              function getImage() {
                if (e.swipe === "right") {
                  return getMedia(`/icons/swipe-left-icon.svg`);
                } else if (e.swipe === "left") {
                  return getMedia(`/icons/swipe-right-icon.svg`);
                }

                return getMedia(`/icons/swipe-up-icon.svg`);
              }
              return (
                <li
                  key={e.id}
                  className={`ReviewItem-item ReviewItem-item--${
                    e.swipe === "left" ? "left" : "right"
                  }`}>
                  <div className="ReviewItem-top">
                    <img className="ReviewItem-swipe" src={getImage()} alt="" />

                    <img
                      className="ReviewItem-flag lazyload"
                      src={e.location}
                      alt=""
                    />
                    <div className="ReviewItem-info text-xs">
                      {e.gender}, {e.age}
                    </div>
                    <div
                      className={`ReviewItem-rating ReviewItem-rating--${e.stars}`}>
                      {Array.from({ length: 5 }).map((_, index) => {
                        return (
                          <svg
                            key={index}
                            className="StarIcon"
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            width={50}
                            height={50}
                            value={4}
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        );
                      })}
                    </div>
                  </div>
                  <div className="ReviewItem-bottom">
                    <div className="ReviewItem-swatches"></div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="ReviewItem-pagination">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
          }}>
          ←
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
          }}>
          1
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
          }}>
          →
        </a>
      </div>
    </div>
  );
}
