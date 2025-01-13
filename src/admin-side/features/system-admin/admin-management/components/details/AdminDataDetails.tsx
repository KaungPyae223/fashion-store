"use client"
import InformationContent from "@/admin-side/components/InformationContent";
import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";
import { fetchAdmin } from "@/admin-side/services/admin";
import Image from "next/image";
import React from "react";
import useSWR from "swr";

const AdminDataDetails = ({ id }: { id: string }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const url = `${baseUrl}/admin/${id}`;

  const { data, isLoading, error } = useSWR(url, fetchAdmin);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : data.data ? (
        <>
          <AdminDetails data={data.data} />
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

const AdminDetails = ({ data }) => {
  return (
    <div className="flex flex-row gap-6">
      <Image
        src={data.photo}
        alt={data.name + " image"}
        width={300}
        height={300}
        className="w-[150px] h-[150px] object-cover object-center"
      />
      <div>
        <p className="mb-3 text-3xl font-medium">{data.name}</p>
        <InformationContent data={data.email} title="email" />
        <InformationContent data={data.phone} title="phone" />
        <InformationContent data={data.address} title="address" />
        <InformationContent data={data.role} title="role" />
      </div>
    </div>
  );
};

export default AdminDataDetails;
