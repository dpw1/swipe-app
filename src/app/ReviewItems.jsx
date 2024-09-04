import React from "react";

import "./ReviewItems.scss";
import { getMedia } from "./utils";
import ReviewItem from "./ReviewItem";

export default function ReviewItems(props) {
  const { items } = props;

  return (
    <div className="ReviewItems">
      {items && items.length >= 1 ? (
        items.map((e) => {
          return <ReviewItem item={e}></ReviewItem>;
        })
      ) : (
        <>
          <p>no images</p>
        </>
      )}
    </div>
  );
}
