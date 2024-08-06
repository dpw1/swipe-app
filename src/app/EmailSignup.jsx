import React from "react";
import "./EmailSignup.scss";
/* eslint-disable react/no-unescaped-entities */

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
                Enter your email to join our waiting list.
              </p>
            </div>
            <div className="mx-auto position-relative form-wrapper">
              {/* <form
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
              </form> */}
              <div id="mc_embed_shell">
                <div id="mc_embed_signup">
                  <form
                    action="https://app.us13.list-manage.com/subscribe/post?u=5996d3fb305483ac22ceb5ba2&id=4b2d64985c&f_id=00dfe5e1f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="form text-center"
                    data-response-message-animation="slide-in-left"
                    target="_self"
                    noValidate="">
                    <div id="mc_embed_signup_scroll">
                      <div className="mc-field-group">
                        <input
                          type="email"
                          name="EMAIL"
                          className="form-control form-control-lg text-center"
                          id="mce-EMAIL"
                          required=""
                          placeholder="Enter your email"
                          defaultValue=""
                        />
                      </div>
                      <div id="mce-responses" className="clear foot">
                        <div
                          className="response"
                          id="mce-error-response"
                          style={{ display: "none" }}
                        />
                        <div
                          className="response"
                          id="mce-success-response"
                          style={{ display: "none" }}
                        />
                      </div>
                      <div
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-5000px" }}>
                        /* real people should not fill this in and expect good
                        things - do not remove this or risk form bot signups */
                        <input
                          type="text"
                          name="b_5996d3fb305483ac22ceb5ba2_4b2d64985c"
                          tabIndex={-1}
                          defaultValue=""
                        />
                      </div>
                      <div className="optionalParent">
                        <div className="clear foot">
                          <input
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="btn btn-lg btn-alternate"
                            defaultValue="Subscribe"
                          />
                          <p style={{ margin: "0px auto" }}>
                            <a
                              href="http://eepurl.com/iWuFUI"
                              title="Mailchimp - email marketing made easy and fun">
                              <span
                                style={{
                                  display: "inline-block",
                                  backgroundColor: "transparent",
                                  borderRadius: 4,
                                }}></span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="response-message">
                {/* <i className="fas fa-envelope font-lg" />
                <p className="font-md m-0">Check your email</p>
                <p className="response">Please confirm the email.</p> */}
                <p style={{ textAlign: "center", display: "block" }}>
                  We will only contact you about the app's release, no
                  promotions. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
