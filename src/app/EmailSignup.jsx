import React from "react";

export default function EmailSignup() {
  return (
    <>
      {/* Stay Tunned */}
      <section className="EmailSignup section stay-tunned">
        <div className="container bring-to-front">
          <div className="shadow rounded p-5 bg-contrast overflow-hidden">
            <div className="section-heading text-center">
              <h2 className="heading-line">Join the waiting list</h2>
              <p className="lead text-alternate">
                Excited? Enter your email for early access. We are releasing in
                August 2024.
              </p>
            </div>
            <div className="mx-auto position-relative form-wrapper">
              <form
                action="https://5studios.net/themes/laapp/srv/register.php"
                className="form text-center"
                data-response-message-animation="slide-in-left"
                noValidate="">
                <div className="form-group input--group">
                  <input
                    id="subscribe-email"
                    type="email"
                    name="Subscribe[email]"
                    className="form-control form-control-lg text-center"
                    placeholder="Enter your email"
                    required=""
                  />
                </div>
                <button type="submit" className="btn btn-lg btn-alternate">
                  Count me in!
                </button>
              </form>
              <div className="response-message">
                <i className="fas fa-envelope font-lg" />
                <p className="font-md m-0">Check your email</p>
                <p className="response">Please confirm the email.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
