import { storeAdmin } from "@/admin-side/services/admin";
import useAdminStore from "@/admin-side/stores/useAdminStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useAdminConfirm = () => {
  const { data } = useAdminStore();

  const router = useRouter();

  const [check, setCheck] = useState<boolean>(false);

  const handleCreateAdmin = async () => {
    const StoreData = {
      name: data.admin.name,
      email: data.admin.email,
      phone: data.admin.phone,
      address: data.admin.address,
      role: data.adminRole,
      photo: data.adminPhoto.file,
    };

    try {
      const res = await storeAdmin(StoreData);
      const json = await res.json();

      if (res.status !== 201) {
        toast.error(json.message);
        return;
      }

      toast.success("Admin created successfully");

      router.push("/admin/admin-management");
    } catch (error) {
      toast.error("An error occurred while creating the admin.");
      console.error("Error:", error);
    }
  };

  return {
    data,
    handleCreateAdmin,
    check,
    setCheck,
  };

};
