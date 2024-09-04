import React from "react";
import "./MyTests.scss";
import { ROUTES } from "./utils";
import Link from "next/link";
import NewTest from "./NewTest";
import ReviewItem from "./ReviewItem";
import ReviewItems from "./ReviewItems";
export default function MyTests({ user }) {
  const woman = `https://mymodernmet.com/wp/wp-content/uploads/2023/02/crypto-tea-ai-women-brazil.jpg`;
  const woman2 = `https://cdn.pixabay.com/photo/2024/02/24/13/41/ai-generated-8594039_640.jpg`;
  const woman3 = `https://img.buzzfeed.com/buzzfeed-static/static/2023-01/24/21/asset/e470a0b884c3/sub-buzz-2985-1674594967-6.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto`;

  const reviews = [
    {
      id: 1,
      gender: `female`,
      age: `30`,
      filters: {
        countries: ["all"],
        blockedCountries: ["russia"],
        age: [18, 50],
        gender: ["male", "female"],
      },
      picture: woman,
      date: ``,
      voters: [
        {
          id: 1231232,
          gender: `female`,
          age: `30`,
          swipe: `left`,
          stars: `4`,
          feedback: ``,
          positiveNotes: [`smile`, `stylish`],
          location: `Germany`,
          negativeNotes: [""],
        },
        {
          id: 1231233,
          gender: `male`,
          age: `28`,
          swipe: `right`,
          stars: `5`,
          feedback: `Great style and confidence.`,
          positiveNotes: [``, ``],
          location: `Germany`,
          negativeNotes: [""],
        },
        {
          id: 1231234,
          gender: `female`,
          age: `32`,
          swipe: `left`,
          stars: `3`,
          feedback: `Decent profile, but not my type.`,
          positiveNotes: [``],
          location: `Germany`,
          negativeNotes: [``],
        },
        {
          id: 1231235,
          gender: `male`,
          age: `29`,
          swipe: `right`,
          stars: `4`,
          feedback: `Nice profile, would like to know more.`,
          positiveNotes: [``],
          location: `Germany`,
          negativeNotes: [""],
        },
      ],
    },
    {
      id: 2,
      gender: `female`,
      age: `25`,
      filters: {
        countries: ["all"],
        blockedCountries: [],
        age: [20, 40],
        gender: ["male", "female"],
      },
      picture: woman2,
      date: ``,
      voters: [
        {
          id: 1231236,
          gender: `male`,
          age: `35`,
          swipe: `right`,
          stars: `5`,
          feedback: `Amazing photo, you have a great sense of style.`,
          positiveNotes: [`fashionable`, `confident`],
          location: `Germany`,
          negativeNotes: [""],
        },
        {
          id: 1231237,
          gender: `female`,
          age: `27`,
          swipe: `left`,
          stars: `3`,
          feedback: `You seem nice, but the picture doesn't stand out.`,
          positiveNotes: [`smile`],
          location: `Germany`,
          negativeNotes: [`average`],
        },
        {
          id: 1231238,
          gender: `male`,
          age: `31`,
          swipe: `right`,
          stars: `4`,
          feedback: `You look friendly and approachable.`,
          positiveNotes: [`friendly`],
          location: `Germany`,
          negativeNotes: [""],
        },
        {
          id: 1231239,
          gender: `female`,
          age: `29`,
          swipe: `left`,
          stars: 2,
          feedback: `Not very eye-catching.`,
          positiveNotes: [``],
          negativeNotes: [`bland`],
          location: `Germany`,
        },
      ],
    },
    {
      id: 3,
      gender: `female`,
      age: `28`,
      filters: {
        countries: ["all"],
        blockedCountries: ["north korea"],
        age: [18, 45],
        gender: ["male"],
      },
      picture: woman3,
      date: ``,
      voters: [
        {
          id: 1231240,
          gender: `male`,
          age: `33`,
          swipe: `right`,
          stars: 5,
          feedback: `Incredible photo! You have a strong presence.`,
          positiveNotes: [`presence`, `beauty`],
          negativeNotes: [""],
          location: `Germany`,
        },
        {
          id: 1231241,
          gender: `male`,
          age: `30`,
          swipe: `right`,
          stars: `4`,
          feedback: `You look very charismatic.`,
          positiveNotes: [`charismatic`],
          negativeNotes: [""],
          location: `Germany`,
        },
        {
          id: 1231242,
          gender: `male`,
          age: `27`,
          swipe: `left`,
          stars: `3`,
          feedback: `Good picture, but not sure about the vibe.`,
          positiveNotes: [`good photo`],
          negativeNotes: [`unclear vibe`],
          location: `Germany`,
        },
        {
          id: 1231243,
          gender: `male`,
          age: `25`,
          swipe: `left`,
          stars: 2,
          feedback: `You seem distant in this picture.`,
          positiveNotes: [``],
          negativeNotes: [`distant`],
          location: `Denmark`,
        },
      ],
    },
  ];

  return (
    <div className="MyTests">
      <div className="MyTests-container container">
        <h2 className="MyTests">My tests</h2>
        <div className="MyTests-gallery">
          {reviews && reviews.length >= 1 ? (
            <ReviewItems items={reviews}></ReviewItems>
          ) : (
            <p>no </p>
          )}
        </div>
      </div>
    </div>
  );
}