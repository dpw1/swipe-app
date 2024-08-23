import { createClient } from "@supabase/supabase-js";
import Cookies from "js-cookie";
import { useAuthStore } from "../store/authStore";

// Initialize Supabase client
const supabase = createClient(
  "https://kjsscbcikciebrzjgbcv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqc3NjYmNpa2NpZWJyempnYmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2Mjk0MDAsImV4cCI6MjAzOTIwNTQwMH0.L-8T_MvyqvQcR1dfeTO1Td62SsSadM2qTkZjvkDO0Io",
);

export const fetchUserData = async () => {
  return new Promise(async (resolve, reject) => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      throw new Error(`No supabase session found`);
      resolve({ error });
      return;
    }

    resolve(data);
  });
};

export const loginWithFacebook = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
  });

  if (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const loginWithGoogle = async (response) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    alert("r");
  }

  console.log("logged", data);
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (!error) {
    useAuthStore.getState().logout();
  } else {
    console.error("Logout error:", error);
  }
};
