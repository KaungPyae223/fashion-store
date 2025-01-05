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

const OrderDetailsPage = ({ id }) => {
  return (
    <div className="mt-6">
      <div className="font-semibold tracking-wide">Order ID : INV-{id}</div>
      <div className="text-sm text-gray-500 mt-0.5">21 June 2024</div>
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
              <InformationContent title="Order Date" data="21 June 2024" />
              <InformationContent title="Packager" data="U Thar Luu" />
              <InformationContent title="Deliver Date" data="26 June 2024" />
              <InformationContent title="Order Products" data="5" />
              <InformationContent title="Order Qty" data="7" />
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
              <InformationContent title="Customer Name" data="U Thar Luu" />
              <InformationContent title="Email" data="4s2t8@example.com" />
              <InformationContent title="Phone" data="0123456789" />
              <InformationContent title="Address" data="123 Street, New York" />
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
              <InformationContent data="Royal Express" title="Delivery" />
              <InformationContent data="092-305-1728" title="Phone" />
              <InformationContent
                data="1234, Street, City, State"
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
              <InformationContent data="1" title="Payment ID" />
              <InformationContent data="Kbz Pay" title="Payment Method" />
              <InformationContent data="Complete" title="Status" />
              <InformationContent data="3600 Ks" title="Total Price" />
              <InformationContent data="3600 Ks" title="Tax" />
              <InformationContent data="3600 Ks" title="Grand Total" />
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
              <InformationContent data="Daw Aye Thida" title="Name" />
              <InformationContent data="+959 123456789" title="Phone" />
              <InformationContent data="AyeThida123@gmail.com" title="Email" />

              <InformationContent
                data="No.123 Street, Yangon"
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
            <div className="text-sm mt-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis laboriosam ipsam, maiores dignissimos facilis quod
              nostrum quia pariatur iusto quasi quisquam ab suscipit animi
              voluptas dolor itaque eum alias tenetur?
            </div>
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
            <OrderProductTable />
          </div>
        </div>
      </div>
    </div>
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

export default OrderDetailsPage;
