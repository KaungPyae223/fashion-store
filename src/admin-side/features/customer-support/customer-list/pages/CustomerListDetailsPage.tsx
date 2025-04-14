"use client";
import React from "react";

import InformationContent from "@/admin-side/components/InformationContent";
import useSWR from "swr";
import { fetchAdmin } from "@/admin-side/services/admin";
import Loading from "@/admin-side/components/Loading";
import CustomerOrder from "../components/CustomerOrder";

const CustomerListDetailsPage = ({ id }) => {
  
  const { data,isLoading } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/customer-details/" + id,
    fetchAdmin
  );


   return isLoading? <Loading/> : (
    <div>
      <div className="border-b border-b-gray-300 pb-5">
        <p className="text-3xl font-semibold mt-6 mb-5">{data.customer.name}</p>
        <InformationContent title="Email" data={data.customer.email} />
        <InformationContent title="Phone" data={data.customer.phone} />
        <InformationContent title="Address" data={data.customer.address} />
      </div>

      <div>
        <p className="text-xl font-medium mt-6 mb-5">Total Orders : {data.customer.total_orders}</p>
        <CustomerOrder id={id}/>
      </div>
    </div>
  );
};



export default CustomerListDetailsPage;
