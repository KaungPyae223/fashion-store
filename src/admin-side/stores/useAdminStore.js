
import { create } from "zustand";

const useAdminStore = create((set) => ({
  data: {
    admin: {
      id: null,
      name: null,
      email: null,
      phone: null,
      address: null,
    },
    adminPhoto: null,
    adminRole: null,
  },

  setAdmin: (admin) => set({ data:admin }),

  setAdminImage: (image) =>
    set((state) => ({
      data: { ...state.data, adminPhoto: image },
    })),
  setAdminData: (adminData) =>
    set((state) => ({ data: { ...state.data, admin: adminData } })),
  setAdminRole: (adminRole) =>
    set((state) => ({ data: { ...state.data, adminRole: adminRole } })),
  resetData: () =>
    set({
      data: {
        admin: {
          id: null,
          name: null,
          email: null,
          phone: null,
          address: null,
        },
        adminPhoto: null,
        adminRole: null,
      },
    }),
}));

export default useAdminStore;
