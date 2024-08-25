import React from "react";
import "./MyTests.scss";
import { ROUTES } from "./utils";
import Link from "next/link";
export default function MyTests() {
  return (
    <div className="MyTests">
      <div className="MyTests-container">
        <div className="MyTests-left text-xxs">
          <span>Home</span>
          <p>My Tests</p>
          <p>Rate</p>
        </div>
        <div className="MyTests-middle">
          <Link href={ROUTES.newTest} className="btn btn-lg btn--app">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.75 11.25V5a.75.75 0 1 0-1.5 0v6.25H5a.75.75 0 1 0 0 1.5h6.25V19a.75.75 0 1 0 1.5 0v-6.25H19a.75.75 0 1 0 0-1.5h-6.25z"
              />
            </svg>

            <span>Create a test</span>
          </Link>

          <div className="MyTests-recent">
            <b>Recent Tests</b>
            <p>Recent tests will show up here.</p>
          </div>
        </div>
        <div className="MyTests-right">
          <div className="MyTests-right-container">
            <div className="MyTests-banner"></div>
            container
          </div>
        </div>
      </div>
    </div>
  );
}
