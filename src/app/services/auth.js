import { createClient } from "@supabase/supabase-js";
import Cookies from "js-cookie";
import { useAuthStore } from "../store/authStore";

// Initialize Supabase client
const supabase = createClient(
  "https://kjsscbcikciebrzjgbcv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqc3NjYmNpa2NpZWJyempnYmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2Mjk0MDAsImV4cCI6MjAzOTIwNTQwMH0.L-8T_MvyqvQcR1dfeTO1Td62SsSadM2qTkZjvkDO0Io",
);

export const fetchUserData = async () => {
  // Check for the presence of the access token cookie
  const accessToken = Cookies.get("sb-access-token");

  if (!accessToken) {
    console.warn("No access token found.");
    return null;
  }

  // Set the access token in Supabase client headers
  supabase.auth.setAuth(accessToken);

  // Fetch user data
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user data:", error);
    return null;
  }

  return data.user; // Returns user object with details such as email
};

export const initializeAuth = async () => {
  // Check for the presence of the access token cookie
  const accessToken = Cookies.get("sb-access-token");

  if (accessToken) {
    // Fetch user data if access token is present
    const user = await fetchUserData();
    useAuthStore.getState().setAuth({
      provider: "facebook",
      token: accessToken,
      user,
    });
  } else {
    // No token found, set auth state to null
    useAuthStore.getState().logout();
  }
};

export const logout = async () => {
  // Clear Supabase auth session
  const { error } = await supabase.auth.signOut();

  if (!error) {
    Cookies.remove("sb-access-token");
    Cookies.remove("sb-refresh-token");
    useAuthStore.getState().logout();
  } else {
    console.error("Logout error:", error);
  }
};
