import React from "react";
import "./HowItWorks.scss";
export default function HowItWorks() {
  return (
    <section className="HowItWorks section features">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="heading-line">How Does It Work?</h2>
          <div className="HowItWorks-buttons">
            <button className="btn btn-secondary active">To rate</button>
            <button className="btn btn-secondary">To be rated</button>
          </div>
          <p className="lead text-muted">
            When you upload your picture to <u>RateMyPicture</u>, people around
            the world will swipe left or right on it, just like in dating apps.
          </p>
          <p className="lead text-muted">
            You can rate other people's pictures to gain free credits, or
            purchase credits for faster results.
          </p>
        </div>
        <div className="row gap-y text-center text-md-left">
          <div className="col-md-4 py-4 rounded shadow-hover">
            <i className="pe pe-7s-diamond pe-3x mb-3 text-primary" />
            <h5 className="bold">Powerful Design</h5>
            <p className="">
              You can rate other people's pictures to gain free credits, or
              purchase credits for faster results.
            </p>
          </div>
          <div className="col-md-4 py-4 rounded shadow-hover">
            <i className="pe pe-7s-tools pe-3x mb-3 text-primary" />
            <h5 className="bold">Professional Tools</h5>
            <p className="">
              Blanditiis cumque, eius error est et exercitationem, explicabo hic
              natus nobis odit porro quia
            </p>
          </div>
          <div className="col-md-4 py-4 rounded shadow-hover">
            <i className="pe pe-7s-light pe-3x mb-3 text-primary" />
            <h5 className="bold">Creative Content</h5>
            <p className="">
              A animi aperiam cupiditate eum incidunt, magni mollitia nam nemo
              non officia omnis, quasi quisquam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
