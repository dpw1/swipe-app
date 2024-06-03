import React, { useEffect, useState } from "react";
import "./FAQ.scss";

const faqs = [
  {
    question: "Who rates my pictures?",
    answer:
      "Your pictures are rated by a diverse community of users from around the globe. You have the option to filter the reviewers based on their gender, age, and location to get feedback that’s most relevant to you.",
  },
  {
    question: "How is toxic feedback dealt with?",
    answer:
      "We utilize advanced AI technology to filter out toxic feedback, ensuring that only constructive and respectful comments reach you. Disrespectful behavior is not tolerated, and users who violate our community guidelines will be banned to maintain a positive and supportive environment.",
  },
  {
    question: "Where are my pictures stored?",
    answer:
      "Your pictures are securely stored using a third-party service known as Cloudflare. We ensure that your data is handled with the highest standards of security and privacy.",
  },
  {
    question: "Can I delete my pictures after uploading?",
    answer:
      "Absolutely. Once you delete your picture, it is permanently removed from our servers and cannot be recovered.",
  },
  {
    question: "Is it free?",
    answer:
      'RateMyPicture is free to use! For faster results, you can purchase credits. Additionally, if you\'d like to unlock the "age" and "location" filters, you can purchase the "unlock filters" option. Buying credits will automatically unlock these filters as well. By default, only the gender filter is available for free users.',
  },
];

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item `} data-aos="fade-up">
      <div className="card shadow-box shadow-hover mb-3">
        <div
          className="card-header py-3"
          onClick={(e) => {
            toggleCollapse(e);
          }}>
          <a
            href="#"
            className={`card-title ${isOpen ? "" : "collapsed"} `}
            data-target
            data-toggle="collapse">
            {faq.question}
          </a>
        </div>
        <div
          className={`collapse card-body ${isOpen ? "show" : ""}`}
          id={`faq-${index}`}>
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const questions = [];

  const Questions = () => {};

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
          <p className="lead">
            Find out more about our platform through these frequently asked
            questions.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-lg-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
