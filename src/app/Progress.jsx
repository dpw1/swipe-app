import React from "react";
import "./Progress.scss";

export default function Progress(props) {
  const { step } = props;
  return (
    <div className="Progress">
      <div className="container">
        <div className="process-bar">
          <div className="status-bar" />
          <div className={`step ${step === 1 ? "active" : ""}`}>
            <span className="step-number">1</span>
            <span className="step-text">Swipe</span>
          </div>
          <div className={`step ${step === 2 ? "active" : ""}`}>
            {" "}
            <span className="step-number">2</span>
            <span className="step-text">Quick notes</span>
          </div>
          <div className={`step ${step === 3 ? "active" : ""}`}>
            {" "}
            <span className="step-number">3</span>
            <span className="step-text">Feedback</span>
          </div>
        </div>
      </div>
    </div>
  );
}
