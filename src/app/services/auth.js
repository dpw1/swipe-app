import { createClient } from "@supabase/supabase-js";
import Cookies from "js-cookie";
import useAuthStore from "../store/authStore";

// Initialize Supabase client
const supabase = createClient(
  "https://kjsscbcikciebrzjgbcv.supabase.co",
  "your-supabase-key",
);

// Function to handle login with Facebook
export const loginWithFacebook = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
  });

  if (error) {
    console.error("Login error:", error);
    throw error;
  }

  // Handle successful login or redirection
  if (data) {
    const token = data.access_token; // Adjust based on the actual token key

    // Store the token in cookies and Zustand store
    Cookies.set("fb-token", token);
    useAuthStore.getState().setAuth({ provider: "facebook", token });
  }
};

// Function to handle storing tokens from the query string
export const storeTokenFromQueryString = (queryString) => {
  const urlParams = new URLSearchParams(queryString);
  const fbToken = urlParams.get("fb_access_token"); // Adjust according to the actual token key

  if (fbToken) {
    Cookies.set("fb-token", fbToken);
    useAuthStore.getState().setAuth({ provider: "facebook", token: fbToken });
  }
};

// Function to handle logout
export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (!error) {
    // Remove Facebook token from cookies and Zustand store
    Cookies.remove("fb-token");
    useAuthStore.getState().logout();
  } else {
    console.error("Logout error:", error);
  }
};
