import React, { useEffect, useState } from "react";
import "./MyTests.scss";
import { ROUTES } from "./utils";
import Link from "next/link";
import NewTest from "./NewTest";
import ReviewItem from "./ReviewItem";
import ReviewItems from "./ReviewItems";
import { useAuthStore } from "./store/authStore";

export default function MyTests({ user }) {
  const [reviews, setReviews] = useState(null);
  const { pictures } = useAuthStore();

  useEffect(() => {
    (async (_) => {
      setReviews(pictures);
    })();
  }, []);

  return (
    <div className="MyTests">
      <div className="MyTests-container container">
        <h2 className="MyTests">My tests</h2>
        <div className="MyTests-gallery">
          {reviews && reviews.length >= 1 ? (
            <ReviewItems
              key={JSON.stringify(reviews)}
              items={reviews}></ReviewItems>
          ) : (
            <p>no </p>
          )}
        </div>
      </div>
    </div>
  );
}
