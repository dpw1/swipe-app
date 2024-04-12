import React from "react";
import "./Progress.scss";

export default function Progress(props) {
  const { step } = props;
  return (
    <div id="ProgressSection" className={`Progress Progress--${step}`}>
      <div className="container">
        <div className="process-bar">
          <div className="status-bar" />
          <div
            className={`step ${step === 1 ? "active" : ""} ${
              step >= 2 ? "step--completed" : ""
            }`}>
            <div className="step-content">
              <span className="step-number">1</span>
              <span className="step-checkmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
                </svg>
              </span>
            </div>

            <span className="step-text">Swipe</span>
          </div>
          <div
            className={`step ${step === 2 ? "active" : ""} ${
              step >= 3 ? "step--completed" : ""
            }`}>
            {" "}
            <div className="step-content">
              <span className="step-number">2</span>
              <span className="step-checkmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
                </svg>
              </span>
            </div>
            <span className="step-text">Quick notes</span>
          </div>
          <div className={`step ${step === 3 ? "active" : ""}`}>
            {" "}
            <div className="step-content">
              <span className="step-number">3</span>
              <span className="step-checkmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
                </svg>
              </span>
            </div>
            <span className="step-text">Feedback</span>
          </div>
        </div>
      </div>
    </div>
  );
}
