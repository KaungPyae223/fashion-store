import { fetchCustomer } from "@/customer-side/services/HomePage";
import SectionTitle from "@/customer-side/components/SectionTitle";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { useFormatDate } from "@/hooks/useFormatDate";
import NoData from "@/admin-side/components/NoData";

const OrderHistory = () => {
  const { isLoading, data, error } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/order-history",
    fetchCustomer
  );

  return (
    !isLoading && (
      <div>
        <SectionTitle title="Order History" />
        <div className="mt-6">
          {data.length > 0 ?
            data.map((el) => <OrderCard data={el} key={el.id} />):(
              <NoData/>
            )}
        </div>
      </div>
    )
  );
};

export const OrderCard = ({ data }) => {
  const { formatDate } = useFormatDate();

  return (
    <div className="py-3 border-b">
      <div className="flex flex-row items-center gap-5">
        <p className="text-2xl font-medium">INV-{data.id}</p>
      </div>
      <table className="my-3">
        <tbody>
          <tr className="pb-2">
            <td className="font-semibold pe-2 text-sm">Date:</td>
            <td className="text-sm">{formatDate(data.created_at)}</td>
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
        href={"/order-details/INV-17860-12-11-2024"}
        className="my-3  inline-block bg-black text-white py-2 px-12"
      >
        View Details
      </Link>
    </div>
  );
};

export default OrderHistory;
