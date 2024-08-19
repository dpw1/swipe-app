import { create } from "zustand";
import Cookies from "js-cookie";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,
  initialize: async () => {
    // Read cookies
    const accessToken = Cookies.get("sb-access-token");
    const refreshToken = Cookies.get("sb-refresh-token");

    if (accessToken) {
      // Fetch user data
      const user = await fetchUserData();

      // Set the auth state
      set({
        isAuthenticated: true,
        user,
        token: accessToken,
      });
    } else {
      // No access token, set auth state to logged out
      set({
        isAuthenticated: false,
        user: null,
        token: null,
      });
    }
  },
  setAuth: (auth) =>
    set({
      isAuthenticated: true,
      user: auth.user,
      token: auth.token,
    }),
  logout: () => {
    // Remove cookies
    Cookies.remove("sb-access-token");
    Cookies.remove("sb-refresh-token");

    // Set auth state to logged out
    set({
      isAuthenticated: false,
      user: null,
      token: null,
    });
  },
}));
