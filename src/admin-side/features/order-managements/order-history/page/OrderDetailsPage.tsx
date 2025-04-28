"use client";
import React from "react";
import {
  CiUser,
  CiDeliveryTruck,
  CiCreditCard1,
  CiShoppingCart,
  CiStickyNote,
} from "react-icons/ci";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { AiOutlineProduct } from "react-icons/ai";
import OrderProductTable from "../components/OrderProductTable";
import useSWR from "swr";
import { fetchOrder } from "@/admin-side/services/order";
import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";
import { useFormatDate } from "@/hooks/useFormatDate";
import { format } from "path";
import InformationContent from "@/admin-side/components/InformationContent";

const OrderDetailsPage = ({ id,isCustomerSupport }) => {



  const baseUrl =   process.env.NEXT_PUBLIC_BASE_URL + (isCustomerSupport? "/customer/order-details/" : "/order/order-history/") + id;

  const { data, isLoading, error } = useSWR(baseUrl, fetchOrder);

  
  
  const { formatDate } = useFormatDate();

  if (isLoading) {
    return <Loading />;
  } else if (data) {
    return (
      <div className="mt-6">
        <div className="font-semibold tracking-wide">Order ID : {id}</div>
        <div className="text-sm text-gray-500 mt-0.5">
          {formatDate(data.order_information.date)}
        </div>
        <div className="mt-9 grid grid-cols-3 gap-12">
          <div className="flex flex-row gap-6">
            <div className="min-w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <CiShoppingCart className="size-5" />
            </div>
            <div>
              <div className="font-semibold text-xl tracking-wide">
                Order Information
              </div>
              <div className="mt-2">
                <InformationContent title="Order ID" data={`INV-${id}`} />
                <InformationContent
                  title="Order Date"
                  data={formatDate(data.order_information.date)}
                />
                <InformationContent
                  title="Status"
                  data={data.order_information.status}
                />
                <InformationContent
                  title="Packager"
                  data={data.order_information.packager}
                />
                <InformationContent
                  title="Packager ID"
                  data={data.order_information.packager_id}
                />
                <InformationContent
                  title="Deliver Date"
                  data={formatDate(data.order_information.deliver_date)}
                />
                <InformationContent
                  title="Order Products"
                  data={data.order_information.products}
                />
                <InformationContent
                  title="Order Qty"
                  data={data.order_information.order_qty}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="min-w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <CiUser className="size-5" />
            </div>
            <div>
              <div className="font-semibold text-xl tracking-wide">
                Customer Information
              </div>
              <div className="mt-2">
                <InformationContent
                  title="Customer Name"
                  data={data.customer_information.name}
                />
                <InformationContent
                  title="Email"
                  data={data.customer_information.email}
                />
                <InformationContent
                  title="Phone"
                  data={data.customer_information.phone}
                />
                <InformationContent
                  title="Address"
                  data={data.customer_information.address}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="min-w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <CiDeliveryTruck className="size-5" />
            </div>
            <div>
              <div className="font-semibold text-xl tracking-wide">
                Delivery Information
              </div>
              <div className="mt-2">
                <InformationContent
                  data={data.delivery_information.name}
                  title="Delivery"
                />
                <InformationContent
                  data={data.delivery_information.phone}
                  title="Phone"
                />
                <InformationContent
                  data={data.delivery_information.email}
                  title="Email"
                />

                <InformationContent
                  data={data.delivery_information.address}
                  title="Address"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-6">
            <div className="min-w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <CiCreditCard1 className="size-5" />
            </div>
            <div>
              <div className="font-semibold text-xl tracking-wide">
                Payment Information
              </div>
              <div className="mt-2">
                <InformationContent
                  data={data.payment_information.method + " Ks"}
                  title="Payment Method"
                />
                <InformationContent
                  data={data.payment_information.total_price + " Ks"}
                  title="Total Price"
                />
                <InformationContent
                  data={data.payment_information.tax + " Ks"}
                  title="Tax"
                />
                <InformationContent
                  data={data.payment_information.grand_total + " Ks"}
                  title="Grand Total"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-6">
            <div className="min-w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <LiaPeopleCarrySolid className="size-5" />
            </div>
            <div>
              <div className="font-semibold text-xl tracking-wide">
                Receiver Information
              </div>
              <div className="mt-2">
                <InformationContent
                  data={data.receiver_information.name}
                  title="Name"
                />
                <InformationContent
                  data={data.receiver_information.phone}
                  title="Phone"
                />
                <InformationContent
                  data={data.receiver_information.email}
                  title="Email"
                />

                <InformationContent
                  data={data.receiver_information.address}
                  title="Address"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="min-w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <CiStickyNote className="size-5" />
            </div>
            <div>
              <div className="font-semibold text-xl tracking-wide">
                Customer Note
              </div>
              <div className="text-sm mt-2 text-justify">{data.note}</div>
            </div>
          </div>
          <div className="grid col-span-3">
            <div className="flex flex-row items-center gap-6">
              <div className="min-w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <AiOutlineProduct className="size-5" />
              </div>
              <div className="font-semibold text-xl tracking-wide">
                Order Products
              </div>
            </div>
            <div className="mt-9">
              <OrderProductTable products={data.order_products} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <NoData />;
  }
};



export default OrderDetailsPage;
