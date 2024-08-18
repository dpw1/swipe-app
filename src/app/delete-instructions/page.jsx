"use client";
import React, { useEffect } from "react";
import { Lato } from "next/font/google";

// import AOS from "aos";

import SwipeApp from "../SwipeApp";
import Header from "../Header";
import Footer from "../Footer";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export default function App() {
  return (
    <main className={lato.className}>
      <Header sticky={false}></Header>
      <div className="PrivacyPolicy">
        <div className="container">
          {" "}
          <h1>Delete Instructions</h1>
          <p>
            <strong>RateMyPicture</strong> ("we", "us", or "our") is committed
            to protecting your privacy in accordance with the General Data
            Protection Regulation (GDPR). This Privacy Policy explains how we
            collect, use, and protect your personal data when you use our app or
            services.
          </p>
          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of personal data:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, and
              other details you provide when creating an account.
            </li>
            <li>
              <strong>Uploaded Images:</strong> Photos that you choose to upload
              to be rated by other users.
            </li>
            <li>
              <strong>Usage Information:</strong> Information about how you
              interact with the app, including swipes, likes, and other
              app-related activities.
            </li>
            <li>
              <strong>Device Information:</strong> Information about your
              device, such as IP address, device type, browser type, and usage
              patterns.
            </li>
          </ul>
          <h2>2. Legal Basis for Processing Your Data</h2>
          <p>
            We collect and process your personal data under the following legal
            bases:
          </p>
          <ul>
            <li>
              <strong>Consent:</strong> By using the app and uploading your
              pictures, you consent to the processing of your personal data for
              the purposes described in this Privacy Policy.
            </li>
            <li>
              <strong>Performance of a Contract:</strong> We process your data
              to provide our services as outlined in our terms and conditions.
            </li>
            <li>
              <strong>Legitimate Interests:</strong> We may process your data to
              improve our services, detect fraud, and ensure the security of our
              platform.
            </li>
          </ul>
          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data for the following purposes:</p>
          <ul>
            <li>To provide and improve the functionality of RateMyPicture.</li>
            <li>To display your uploaded images to other users for rating.</li>
            <li>
              To communicate with you regarding your account, updates, or
              security issues.
            </li>
            <li>To analyze usage trends to enhance the user experience.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <h2>4. Sharing of Your Data</h2>
          <p>
            We do not sell your personal data. However, we may share your
            personal data:
          </p>
          <ul>
            <li>
              With third-party service providers who assist in operating our app
              (e.g., hosting, analytics).
            </li>
            <li>
              To comply with legal obligations or to respond to lawful requests
              from authorities.
            </li>
            <li>
              To protect the rights, privacy, safety, or property of
              RateMyPicture, our users, or the public.
            </li>
          </ul>
          <h2>5. International Data Transfers</h2>
          <p>
            Your data may be transferred to, and processed in, countries outside
            of the European Economic Area (EEA). If we transfer your data to a
            third country, we will ensure that appropriate safeguards are in
            place, such as standard contractual clauses or an adequacy decision
            by the European Commission, to protect your personal data.
          </p>
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data for as long as necessary to provide our
            services or as required by law. If you delete your account, we will
            delete your personal data unless retention is legally required.
          </p>
          <h2>7. Your Rights Under GDPR</h2>
          <p>You have the following rights concerning your personal data:</p>
          <ul>
            <li>
              <strong>Right to Access:</strong> You can request access to the
              personal data we hold about you.
            </li>
            <li>
              <strong>Right to Rectification:</strong> You can request that we
              correct any inaccurate or incomplete data.
            </li>
            <li>
              <strong>Right to Erasure ("Right to Be Forgotten"):</strong> You
              can request that we delete your personal data in certain
              circumstances.
            </li>
            <li>
              <strong>Right to Restrict Processing:</strong> You can request
              that we limit the processing of your personal data.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> You can request a copy
              of your personal data in a structured, commonly used, and
              machine-readable format.
            </li>
            <li>
              <strong>Right to Object:</strong> You can object to the processing
              of your personal data, especially if it is based on legitimate
              interests or for direct marketing purposes.
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> You can withdraw your
              consent to data processing at any time without affecting the
              lawfulness of processing based on consent before its withdrawal.
            </li>
            <li>
              <strong>Right to Lodge a Complaint:</strong> You have the right to
              lodge a complaint with a supervisory authority if you believe your
              data protection rights have been violated.
            </li>
          </ul>
          <h2>8. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data from unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the internet is entirely secure, and we cannot guarantee absolute
            security.
          </p>
          <h2>9. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to collect usage
            information and enhance the user experience. You can manage your
            cookie preferences through your browser settings.
          </p>
          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Any changes will be
            posted with a new effective date, and we encourage you to review
            this policy periodically.
          </p>
          <h2>11. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or your personal data, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> contact@ratemypicture.app
          </p>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
