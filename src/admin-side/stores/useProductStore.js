import { create } from "zustand";

const useProductStore = create((set) => ({
  product: {
    productData: {
      Name: null,
      CategoryID: null,
      Gender: null,
      Description: null,
    },
    productPrice: {
      Price: null,
      Profit: null,
      SellPrice: 0,
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

  setUpdateProductData: (productData) =>
    set({
      product: productData,
    }),

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

    resetProductPropertiesWithoutSize: () =>
      set((state) => ({
        product: {
          ...state.product,
          productProperties: {
            ...state.product.productProperties,
            Type: null,
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

  setProductPrice: (productPrice) =>
    set((state) => ({
      product: { ...state.product, productPrice: productPrice },
    })),

  setResetProductStore: () =>
    set({
      product: {
        productData: {
          Name: null,
          CategoryID: null,
          Gender: null,
          Description: null,
        },
        productPrice: {
          Price: null,
          Profit: null,
          SellPrice: 0,
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
    }),
}));

export default useProductStore;
