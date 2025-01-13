import { updateAdmin } from "@/admin-side/services/admin";
import useAdminStore from "@/admin-side/stores/useAdminStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useAdminUpdate = () => {
  const { data } = useAdminStore();

  const router = useRouter();

  const [check, setCheck] = useState<boolean>(false);

  const handleUpdateAdmin = async () => {
    const updateData = {
      id: data.admin.id,
      name: data.admin.name,
      email: data.admin.email,
      phone: data.admin.phone,
      address: data.admin.address,
      role: data.adminRole,
      photo: data.adminPhoto.file,
    };

    try {
      const res = await updateAdmin(updateData);
      const json = await res.json();

      if (res.status !== 200) {
        toast.error(json.message);
        return;
      }

      toast.success("Admin updated successfully");

      router.push("/admin/admin-management");
    } catch (error) {
      toast.error("An error occurred while updating the admin.");
      console.error("Error:", error);
    }
  };

  return {
    data,
    handleUpdateAdmin,
    check,
    setCheck,
  };
};
