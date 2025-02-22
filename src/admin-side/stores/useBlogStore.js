import { create } from "zustand";

const useBlogStore = create((set) => ({
  data: {
    content: "",
    title: "",
    image: null,
  },
  setData: (newData) =>
    set({
      data: newData,
    }),
}));

export default useBlogStore;
