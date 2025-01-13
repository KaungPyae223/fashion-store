import { create } from "zustand";

const useAdminProfileStore = create((set) => ({
  adminData: null,
  setAdmin: (admin) => set({ adminData: admin }),
}));

export default useAdminProfileStore;
