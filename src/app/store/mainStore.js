import { create } from "zustand";
import Cookies from "js-cookie";

const COOKIE_NAME = `counter_test`;
const mainStore = create((set) => ({
  count: parseInt(Cookies.get(COOKIE_NAME)) || 0,
  initialize: () => {
    const cookieValue = parseInt(Cookies.get(COOKIE_NAME)) || 0;
    set({ count: cookieValue });
  },
  increase: () =>
    set((state) => {
      const newCount = state.count + 1;
      Cookies.set(COOKIE_NAME, newCount);
      return { count: newCount };
    }),
  decrease: () =>
    set((state) => {
      const newCount = state.count - 1;
      Cookies.set(COOKIE_NAME, newCount);
      return { count: newCount };
    }),
}));
export default mainStore;
