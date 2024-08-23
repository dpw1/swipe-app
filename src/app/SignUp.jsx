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

export default function SignUp() {
  const router = useRouter();

  const { isAuthenticated, user } = useAuthStore();
  const [isInitialized, setIsInitialized] = useState(true);

  useEffect(() => {}, []);

  return (
    <div className="SignUp">
      <button
        onClick={() => {
          loginWithGoogle();
        }}>
        Login
      </button>
      {/* <Script
        src="https://accounts.google.com/gsi/client"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div
        id="g_id_onload"
        data-client_id="560598066061-lhq9t1nasukdhnsio8igljlmln97e82o.apps.googleusercontent.com"
        data-context="signup"
        data-ux_mode="popup"
        data-callback="loginWithGoogle"
        data-auto_prompt="false"></div>

      <div
        class="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"></div> */}
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
              <div>
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
