import { create } from "zustand";

const useCraftStore = create((set) => ({
  data: [],

  setStoreCraft: (newData) =>
    set((state) => {
      const product = state.data.find(
        (el) => el.id == newData.id && el.size == newData.size
      );

      if (!product) {
        return { data: [...state.data, newData] };
      } else {
        return {
          data: state.data.map((el) => {
            if (el.id == newData.id) {
              return { ...el, qty: el.qty + 1 };
            } else {
              return el;
            }
          }),
        };
      }
    }),
  increaseQty: (product) =>
    set((state) => ({
      data: state.data.map((el) => {
        if (el.id == product.id && el.size == product.size) {
          return { ...el, qty: el.qty + 1 };
        } else {
          return el;
        }
      }),
    })),
  decreaseQty: (product) =>
    set((state) => ({
      data: state.data.map((el) => {
        if (el.id == product.id && el.size == product.size && el.qty > 1) {
          return { ...el, qty: el.qty - 1 };
        } else {
          return el;
        }
      }),
    })),
  removeProduct: (product) =>
    set((state) => ({
      data: state.data.filter(
        (el) => el.id == product.id && el.size != product.size
      ),
    })),
}));

export default useCraftStore;
