import { create } from "zustand";

const useCarouselStore = create((set) => ({
  data: {
    title: null,
    sub_title: null,
    link: null,
    link_title: null,
    photo: null,
  },
  setData: (newData) =>
    set({
      data: newData,
    }),
  setResetData: () =>
    set({
      data: {
        title: null,
        sub_title: null,
        link: null,
        link_title: null,
        photo: null,
      },
    }),
}));

export default useCarouselStore;
