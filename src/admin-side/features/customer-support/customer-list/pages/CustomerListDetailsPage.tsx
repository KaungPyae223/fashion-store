import React from "react";
import { useCustomerDetailsData } from "../../customer-order/hooks/useCustomerDetailsData";
import { useFormatDate } from "@/hooks/useFormatDate";
import Link from "next/link";

const CustomerListDetailsPage = async ({ id }) => {
  const { getCustomerDetails } = useCustomerDetailsData();

  const data = await getCustomerDetails({ id });

  return (
    <div>
      <div className="border-b border-b-gray-300 pb-5">
        <p className="text-3xl font-semibold mt-6 mb-5">{data.customer.name}</p>
        <InformationContent title="Email" data={data.customer.email} />
        <InformationContent title="Phone" data={data.customer.phone} />
        <InformationContent title="City" data={data.customer.city} />
        <InformationContent title="Township" data={data.customer.township} />
        <InformationContent title="Zip Code" data={data.customer.zipCode} />
        <InformationContent title="Address" data={data.address} />
      </div>

      <div>
        <p className="text-xl font-medium mt-6 mb-5">Total Orders : 5</p>
        <div className="bg-white p-3">
          <table className="table-auto w-full text-left border-spacing-y-4 border-spacing-x-0">
            <thead>
              <tr className=" text-gray-800 border-b">
                <th className="py-2 w-10 pe-2 text-nowrap">Order ID</th>
                <th className="text-start py-2 px-4">Payment Method</th>

                <th className="text-end py-2 px-4"> Products</th>
                <th className="text-end py-2 px-4"> Qty</th>
                <th className="text-end py-2 px-4">Tax</th>

                <th className="text-end py-2 px-4"> Amount</th>

                <th className="text-start py-2 px-4">Status</th>

                <th className="py-2 text-end">Order Date</th>
                <th className="py-2 text-center w-28">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.customer_orders.map((order) => (
                <OrderTr key={order.id} order={order} id={id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const OrderTr = ({ order,id }) => {
  const { formatDate } = useFormatDate();

  return (
    <tr className=" text-gray-800 border-b last:border-b-0 text-sm duration-100 hover:bg-gray-800 hover:text-white">
      <td className=" py-3 w-10 text-end pe-2 text-nowrap ps-4">{order.id}</td>
      <td className="py-3 px-4 text-start">{order.payment}</td>

      <td className="text-end py-3 px-4">{order.total_products}</td>
      <td className="text-end py-3 px-4">{order.total_qty}</td>
      <td className="text-end py-3 px-4">{order.tax} Ks</td>

      <td className="text-end py-3 px-4">{order.total_amount} Ks</td>

      <td className="text-start py-3 px-4">{order.status}</td>

      <td className="py-3 text-end">{formatDate(order.date)}</td>
      <td className="py-3 text-center w-28">
        <Link href={`/admin/customer-list/details/${id}/order/${order.id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-4 mx-auto cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </Link>
      </td>
    </tr>
  );
};

const InformationContent = ({
  data,
  title,
}: {
  data: string;
  title: string;
}) => {
  return (
    <div className="text-sm  mt-0.5 flex flex-row gap-1.5">
      <div className="font-medium text-gray-500">{title}:</div>{" "}
      <div>{data}</div>
    </div>
  );
};

export default CustomerListDetailsPage;
