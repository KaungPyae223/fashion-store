import SectionTitle from "@/customer-side/components/SectionTitle";
import { fetchCustomer } from "@/customer-side/services/HomePage";
import React from "react";
import toast from "react-hot-toast";
import { removeCookie } from "react-use-cookie";
import { logOut } from "@/customer-side/services/LogOut";
import useSWR from "swr";
import { useRouter } from "next/navigation";

const ProfileData = () => {
  const { isLoading, data, error } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/customer-data",
    fetchCustomer
  );

  
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      const res = await logOut();
      const json = await res.json();

      if (res.status !== 200) {
        toast.error(json.message);
        return;
      }

      toast.success("Log Out Success");
      removeCookie("user_token");

      router.push("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    !isLoading && (
      <div>
        <SectionTitle title="Profile Data" />
        <p className="text-3xl font-semibold">{data.name}</p>
        <div className="my-6">
          <div className="mb-2 flex flex-row items-center">
            <p className="font-semibold pe-3">Email:</p>
            <p>{data.email}</p>
          </div>
          <div className="mb-2 flex flex-row items-center">
            <p className="font-semibold pe-3">Phone:</p>
            <p>{data.phone}</p>
          </div>

          <div className="mb-2 flex flex-row items-center">
            <p className="font-semibold pe-3">Address:</p>
            <p>{data.address}</p>
          </div>
          <div className="mb-2 flex flex-row items-center">
            <p className="font-semibold pe-3">Total Orders:</p>
            <p>{data.total_orders}</p>
          </div>
        </div>
        <div
          onClick={handleLogOut}
          className="text-base px-9 py-2 bg-gray-700 w-fit text-white cursor-pointer"
        >
          Log Out
        </div>
      </div>
    )
  );
};

export default ProfileData;
