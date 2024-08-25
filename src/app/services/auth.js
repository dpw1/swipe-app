import { createClient } from "@supabase/supabase-js";
import Cookies from "js-cookie";
import { useAuthStore } from "../store/authStore";

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

export const getUserImages = async (id = null) => {
  return new Promise(async (resolve, reject) => {
    if (id === null) {
      throw new Error(`no id for getUserImages`);
    }
    try {
      const { data, error } = await supabase.storage.from("pictures").list(id, {
        limit: 10,
        offset: 0,
        sortBy: { column: "updated_at", order: "desc" },
      });

      if (error) {
        console.error("Error retrieving:", error);
        return reject(error);
      }

      const fileNames = data.map((file) => file.name);

      const urlPromises = fileNames.slice(0, 5).map((fileName) => {
        const path = `${id}/${fileName}`;
        return supabase.storage.from("pictures").createSignedUrl(path, 86400);
      });

      const urlResults = await Promise.all(urlPromises);

      const fileUrls = urlResults.map((e) => e.data.signedUrl);

      resolve(fileUrls);
    } catch (error) {
      console.error("Error fetching file URLs:", error);
      reject(error);
    }
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

    setTimeout(() => {
      window.location.reload();
    }, 500);
  } else {
    console.error("Logout error:", error);
  }
};
