import SectionTitle from "@/customer-side/components/SectionTitle";
import { fetchCustomer } from "@/customer-side/services/HomePage";
import React from "react";
import useSWR from "swr";

const ProfileData = () => {
  const { isLoading, data, error } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/customer-data",
    fetchCustomer
  );

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
      </div>
    )
  );
};

export default ProfileData;
