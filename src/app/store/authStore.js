import { create } from "zustand";
import Cookies from "js-cookie";

const useAuthStore = create((set) => ({
  providers: {
    facebook: Cookies.get("fb-token") || null,
  },
  user: null,
  setAuth: ({ provider, token, user }) =>
    set((state) => ({
      providers: {
        ...state.providers,
        [provider]: token,
      },
      user, // Store user data in Zustand
    })),
  logout: () => set({ providers: { facebook: null }, user: null }),
  isAuthenticated: () => {
    return Boolean(Cookies.get("fb-token"));
  },
}));

export default useAuthStore;
