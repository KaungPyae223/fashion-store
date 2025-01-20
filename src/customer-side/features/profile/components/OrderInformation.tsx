import NoData from "@/admin-side/components/NoData";
import SectionTitle from "@/customer-side/components/SectionTitle";
import { fetchCustomer } from "@/customer-side/services/HomePage";
import { useFormatDate } from "@/hooks/useFormatDate";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const OrderInformation = () => {
  const { isLoading, data, error } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/order-information",
    fetchCustomer
  );

  return (
    !isLoading && (
      <div>
        <SectionTitle title="Order Information" />
        <div className="mt-6">
          {data.length > 0 ? (
            data.map((el) => <OrderCard data={el} key={el.id} />)
          ) : (
            <NoData />
          )}
        </div>
      </div>
    )
  );
};

const OrderCard = ({ data }) => {
  const { formatDate } = useFormatDate();

  return (
    <div className="py-3 border-b ">
      <div className="flex flex-row items-center gap-5">
        <p className="text-2xl font-medium">INV-{data.id}</p>
        <div className="py-1.5 px-4 font-medium rounded-full border text-sm border-gray-300">
          {data.status}
        </div>
      </div>
      <table className="my-3">
        <tbody>
          <tr className="pb-2">
            <td className="font-semibold pe-2 text-sm">Date:</td>
            <td className="text-sm">{formatDate(data.created_at)}</td>
          </tr>
          <tr className="pb-2">
            <td className="font-semibold pe-2 text-sm">Status:</td>
            <td className="text-sm">{data.status}</td>
          </tr>
          <tr className="pb-2">
            <td className="font-semibold pe-2 text-sm">Receiver:</td>
            <td className="text-sm">{data.name}</td>
          </tr>
          <tr className="pb-2">
            <td className="font-semibold pe-2 text-sm">Phone:</td>
            <td className="text-sm">{data.phone}</td>
          </tr>
          <tr className="pb-2">
            <td className="font-semibold pe-2 text-sm">Address:</td>
            <td className="text-sm">{data.address}</td>
          </tr>
          <tr className="pb-2">
            <td className="font-semibold pe-2 text-sm">Total Price:</td>
            <td className="text-sm">{data.total_price} Ks</td>
          </tr>
        </tbody>
      </table>
      <Link
        href={"/order-details/" + data.id}
        className="my-3  inline-block bg-black text-white py-2 px-12"
      >
        View Details
      </Link>
    </div>
  );
};

export default OrderInformation;
