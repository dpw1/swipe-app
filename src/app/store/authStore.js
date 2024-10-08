import { create } from "zustand";
import Cookies from "js-cookie";
import { isObjectEmpty } from "../utils";
import { supabase } from "../services/auth";
import { createClient } from "@supabase/supabase-js";

export const useAuthStore = create((set, get) => ({
  isAuthenticated: false,
  user: null,
  token: null,
  isUserLoggedIn: () => {
    return new Promise(async (resolve, reject) => {
      const supabase = createClient(
        "https://kjsscbcikciebrzjgbcv.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqc3NjYmNpa2NpZWJyempnYmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2Mjk0MDAsImV4cCI6MjAzOTIwNTQwMH0.L-8T_MvyqvQcR1dfeTO1Td62SsSadM2qTkZjvkDO0Io",
      );

      var user = get().user;

      if (user !== null) {
        resolve(user);
        return;
      }
      const { data, error } = await supabase.auth.getSession();

      if (
        error ||
        !data ||
        !data.hasOwnProperty("session") ||
        (data.hasOwnProperty("session") && data.session === null)
      ) {
        resolve(false);
        return;
      }

      var user = data.session.user;
      console.log("Logged in!", user);

      get().setUser(user);
      resolve({ ...user });
    });
  },

  setUser: (user = null) => {
    if (
      !user ||
      isObjectEmpty(user) ||
      (user.hasOwnProperty("session") && user.session === null)
    ) {
      console.error(`No user passed for "set user".`);
      set({
        isAuthenticated: false,
        user: null,
      });
      return;
    }

    set({
      isAuthenticated: true,
      user,
    });
  },

  logout: () => {
    set({
      isAuthenticated: false,
      user: null,
    });
  },
}));
