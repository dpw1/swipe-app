import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

import "./SignUp.scss";

import mainStore from "./store/mainStore";
import {
  loginWithFacebook,
  loginWithGoogle,
  storeTokenFromQueryString,
} from "./services/auth";
import { useAuthStore } from "./store/authStore";

import AbstractBackground1 from "./images/AbstractBackground1.svg";

export default function SignUp() {
  const router = useRouter();

  const { isAuthenticated, user } = useAuthStore();
  const [isInitialized, setIsInitialized] = useState(true);

  useEffect(() => {}, []);

  return (
    <div className="SignUp">
      {/* <button
        onClick={() => {
          loginWithGoogle();
        }}>
        Login with gogle
      </button> */}

      {/* https://app.visily.ai/ */}

      <div className="container">
        {isInitialized === false ? (
          <div>Loading...</div>
        ) : (
          <>
            {isAuthenticated ? (
              <div>
                <p>Welcome back, {user?.email || "User"}!</p>
                {/* Display other user details if needed */}
              </div>
            ) : (
              <div className="SignUp-login">
                <div className="SignUp-login-wrapper z-10 flex max-h-140 w-240 grow rounded-xl border-4 border-white shadow-2xl mobile:h-screen mobile:max-h-screen mobile:w-screen mobile:border-0 tablet-lg:w-132">
                  <div className="SignUp-content grow bg-white px-18 mobile:px-7 mobile:pt-24 mobile-xs:px-5">
                    <div className="flex h-full w-full flex-col items-center justify-between bg-white">
                      <div className="w-full">
                        <div className="flex justify-center">
                          <h1 className="relative text-center text-3xl font-bold leading-10 text-gray-900 mobile:text-2xl">
                            Create your free account
                          </h1>
                        </div>
                        <div className="flex justify-center gap-2">
                          <button
                            type="button"
                            onClick={loginWithGoogle}
                            className="flex h-13 cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-gray-400 bg-white font-bold hover:bg-gray-200 focus:outline-none active:bg-gray-400 active:outline-none grow mobile-xs:w-full">
                            <img
                              alt=""
                              src="https://cdn.visily.ai/app/production/1724310692870/static/GoogleLogo-842bfc2a.svg"
                              className="h-5 w-5"
                            />
                            <span className="text-base font-bold leading-5.5 text-gray-800 mobile:text-sm mobile:leading-4.5">
                              Continue with Google
                            </span>
                          </button>
                        </div>
                        <div className="my-5 flex justify-center">
                          <div className="relative flex w-19 justify-center">
                            <div className="absolute left-0 top-1/2 w-full border-t border-gray-400" />
                            <div className="relative z-10 bg-white px-2 text-sm leading-4.5 text-gray-700">
                              OR
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 stroke-current text-gray-900">
                            <path
                              d="M2.5 4.375H17.5V15C17.5 15.1658 17.4342 15.3247 17.3169 15.4419C17.1997 15.5592 17.0408 15.625 16.875 15.625H3.125C2.95924 15.625 2.80027 15.5592 2.68306 15.4419C2.56585 15.3247 2.5 15.1658 2.5 15V4.375Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.5 4.375L10 11.25L2.5 4.375"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <input
                            data-auth-input-has-error="false"
                            type="text"
                            className="mt-3 block h-10 w-full rounded-lg border pl-10 text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-4 border-gray-300 hover:border-primary focus:border-primary focus:ring-primary/25"
                            placeholder="Work email"
                            defaultValue=""
                          />
                        </div>
                        <div className="mt-3 flex w-full items-center justify-end">
                          <button
                            className="flex h-10 items-center justify-center rounded-md px-6 text-white transition-colors duration-200 focus:outline-none cursor-pointer active:bg-primary-600 bg-primary-500 hover:bg-primary-600"
                            style={{ width: "100%" }}>
                            Continue with email -&gt;
                          </button>
                        </div>
                        <div className="mt-3 text-center text-xs text-gray-600">
                          By registering, you agree to our{" "}
                          <a
                            href="https://www.visily.ai/terms-of-service"
                            target="_blank"
                            rel="noreferrer"
                            className=" cursor-pointer text-gray-700 underline hover:text-primary">
                            Terms of Use
                          </a>{" "}
                          &amp;{" "}
                          <a
                            href="https://www.visily.ai/privacy-policy"
                            target="_blank"
                            rel="noreferrer"
                            className=" cursor-pointer text-gray-700 underline hover:text-primary">
                            Privacy Policy
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="w-full text-center text-base leading-5.5 text-gray-600 mobile:fixed mobile:bottom-6 mobile:left-1/2 mobile:-translate-x-1/2">
                          <span className="mr-2">Already have an account?</span>
                          <a
                            className="inline-block cursor-pointer font-bold text-primary-500 underline"
                            href="/login?utm_source=organic&utm_medium=organic&firstLandingPage=https%3A%2F%2Fwww.visily.ai%2Fai-ui-design-generator%2F&convertedPage=https%3A%2F%2Fwww.visily.ai%2Fai-ui-design-generator%2F">
                            Log in
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="SignUp-image w-108 shrink-0 rounded-r-xl mobile:hidden tablet-lg:hidden"
                    style={{
                      backgroundImage:
                        'url("https://cdn.visily.ai/app/production/1724310692870/static/SignupGraphic-e7e3321a.png")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  />
                </div>
                {/* <button className="btn-fb" onClick={loginWithFacebook}>
                  <div className="fb-content">
                    <div className="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                      version={1}>
                        <path
                          fill="#FFFFFF"
                          d="M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z"
                        />
                        <path
                          fill="#4267b2"
                          d="M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z"
                        />
                      </svg>
                    </div>
                    <p>Sign in with Facebook</p>
                  </div>
                </button> */}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
