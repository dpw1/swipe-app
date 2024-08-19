import { createClient } from "@supabase/supabase-js";
import Cookies from "js-cookie";
import useAuthStore from "../store/authStore";

// Initialize Supabase client
const supabase = createClient(
  "https://kjsscbcikciebrzjgbcv.supabase.co",
  "your-supabase-key",
);

export const loginWithFacebook = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
  });

  if (error) {
    console.error("Login error:", error);
    throw error;
  }

  if (data) {
    const token = data.access_token; // Adjust based on the actual token key
    if (token) {
      Cookies.set("fb-token", token);
      const user = await fetchUserData();
      useAuthStore.getState().setAuth({
        provider: "facebook",
        token,
        user,
      });
    }
  }
};
export const fetchUserData = async () => {
  const session = supabase.auth.session();

  if (!session) {
    return null;
  }

  const { user, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user data:", error);
    return null;
  }

  return user; // Returns user object with details such as email
};

export const storeTokenFromQueryString = (queryString) => {
  const urlParams = new URLSearchParams(queryString);

  const accessToken = urlParams.get("access_token");
  const refreshToken = urlParams.get("refresh_token");
  const expiresAt = urlParams.get("expires_at");
  const providerToken = urlParams.get("provider_token");

  if (accessToken) {
    Cookies.set("fb-token", accessToken);
    Cookies.set("fb-refresh-token", refreshToken);
    Cookies.set("fb-expires-at", expiresAt);
    Cookies.set("fb-provider-token", providerToken);

    useAuthStore.getState().setAuth({
      provider: "facebook",
      token: accessToken,
      user: fetchUserData(),
    });
  }
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (!error) {
    Cookies.remove("fb-token");
    Cookies.remove("fb-refresh-token");
    Cookies.remove("fb-expires-at");
    Cookies.remove("fb-provider-token");
    useAuthStore.getState().logout();
  } else {
    console.error("Logout error:", error);
  }
};
