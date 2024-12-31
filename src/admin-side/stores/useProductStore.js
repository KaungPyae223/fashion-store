import { create } from "zustand";

const useProductStore = create((set) => ({
  product: {
    productData: {
      Name: null,
      Price: null,
      CategoryID: null,
      Gender: null,
      Description: null,
    },
    productProperties: {
      Brand: null,
      Type: null,
      Color: null,
      Size: "[]",
    },
    productCoverImage: null,
    productDetailsImage: null,
    productStatus: null,
  },
  setProductData: (productData) =>
    set((state) => ({
      product: { ...state.product, productData: productData },
    })),

  resetProductProperties: () =>
    set((state) => ({
      product: {
        ...state.product,
        productProperties: {
          ...state.product.productProperties,
          Type: null,
          Size: "[]",
        },
      },
    })),

  setProductProperties: (productProperties) =>
    set((state) => ({
      product: { ...state.product, productProperties: productProperties },
    })),
  setProductCoverImage: (productCoverImage) =>
    set((state) => ({
      product: { ...state.product, productCoverImage: productCoverImage },
    })),
  setProductDetailsImage: (productDetailsImage) =>
    set((state) => ({
      product: { ...state.product, productDetailsImage: productDetailsImage },
    })),

  setProductStatus: (productStatus) =>
    set((state) => ({
      product: { ...state.product, productStatus: productStatus },
    })),
}));

export default useProductStore;
