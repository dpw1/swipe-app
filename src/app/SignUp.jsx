import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import "./SignUp.scss";

import mainStore from "./store/mainStore";
import { loginWithFacebook, storeTokenFromQueryString } from "./services/auth";

export default function SignUp() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.search) {
      storeTokenFromQueryString(window.location.search);
      router.replace("/");
      debugger;
    }
  }, [router]);

  const { count, increase, decrease, initialize } = mainStore();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initialize(); // Initialize state from cookies
    setIsInitialized(true); // Mark initialization complete
  }, [initialize]);

  if (!isInitialized) {
    return; // Render a loading state until the store is initialized
  }
  return (
    <div className="SignUp">
      <div className="container">
        {isInitialized === false ? (
          <div>Loading...</div>
        ) : (
          <>
            <div>
              <button className="btn-fb" onClick={loginWithFacebook}>
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
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
