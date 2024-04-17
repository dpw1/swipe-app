import React, { useEffect, useState } from "react";
import "./FAQ.scss";

export default function FAQ() {
  const questions = [];

  return (
    <section className="faq section faqs-dd bg-light edge top-left">
      <div className="shapes-container">
        <div className="absolute icon" data-aos="fade-down-left">
          <i className="fas fa-question" />
        </div>
      </div>
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="heading-line">Frequently Asked Questions</h2>
          <p className="lead">Want to know more about our services?</p>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-lg-auto">
            <div data-aos="fade-up">
              <div className="card shadow-box shadow-hover mb-3">
                <div className="card-header py-3">
                  <a
                    href="#"
                    className="card-title collapsed"
                    data-toggle="collapse"
                    data-target="#v1-q1">
                    What does the package include?
                  </a>
                </div>
                <div id="v1-q1" className="collapse card-body">
                  When you buy Dashcore, you get all you see in the demo but the
                  images. We include SASS files for styling, complete JS files
                  with comments, all HTML variations. Besides we include all
                  mobile PSD mockups.
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="card shadow-box shadow-hover mb-3">
                <div className="card-header py-3">
                  <a
                    href="#"
                    className="card-title collapsed"
                    data-toggle="collapse"
                    data-target="#v1-q2">
                    What is the typical response time for a support question?
                  </a>
                </div>
                <div id="v1-q2" className="collapse card-body">
                  Since you report us a support question we try to make our best
                  to find out what is going on, depending on the case it could
                  take more or les time, however a standard time could be
                  minutes or hours.
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="card shadow-box shadow-hover mb-3">
                <div className="card-header py-3">
                  <a
                    href="#"
                    className="card-title collapsed"
                    data-toggle="collapse"
                    data-target="#v1-q3">
                    What do I need to know to customize this template?
                  </a>
                </div>
                <div id="v1-q3" className="collapse card-body">
                  Our documentation give you all you need to customize your
                  copy. However you will need some basic web design knowledge
                  (HTML, Javascript and CSS)
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="card shadow-box shadow-hover mb-3">
                <div className="card-header py-3">
                  <a
                    href="#"
                    className="card-title collapsed"
                    data-toggle="collapse"
                    data-target="#v1-q4">
                    Can I suggest a new feature?
                  </a>
                </div>
                <div id="v1-q4" className="collapse card-body">
                  Definitely <span className="bold">Yes</span>, you can contact
                  us to let us know your needs. If your suggestion represents
                  any value to both we can include it as a part of the theme or
                  you can request a custom build by an extra cost. Please note
                  it could take some time in order for the feature to be
                  implemented.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
