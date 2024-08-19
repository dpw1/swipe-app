import { create } from "zustand";
import Cookies from "js-cookie";

const useAuthStore = create((set) => ({
  providers: {
    facebook: Cookies.get("fb-token") || null,
  },
  setAuth: ({ provider, token }) =>
    set((state) => ({
      providers: {
        ...state.providers,
        [provider]: token,
      },
    })),
  logout: () => set({ providers: { facebook: null } }),
}));

export default useAuthStore;
