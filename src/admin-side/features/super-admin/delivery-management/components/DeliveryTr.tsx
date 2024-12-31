"use client";
import Modal from "@/admin-side/components/Modal";
import React, { useState } from "react";
import UpdateDeliveryForm from "./UpdateDeliveryForm";
import toast from "react-hot-toast";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import { deleteDeliver } from "@/admin-side/services/deliver";

const DeliveryTr = ({ delivery }) => {
  const [openModel, setOpenModel] = useState(false);
  const {revalidate} = useRevalidatedData();

  const handleDeleteBtn = async () => {
    if (window.confirm("Are you sure to delete")) {
      try {
        const res = await deleteDeliver(delivery.id);
        const json = await res.json();

        if (res.ok) {
          toast.success(json.message);
          await revalidate("/deliver");
        } else {
          toast.error(json.message);
        }
      } catch (error) {
        toast.error("An error occurred while deleting the product.");
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <tr className=" text-gray-800 bg-white border-y-[12px] border-y-gray-100">
        <td className="text-start p-2 ps-4 py-4 ">{delivery.delivery}</td>
        <td className="text-start p-2 ">{delivery.phone}</td>
        <td className="text-start p-2 ">{delivery.email}</td>
        <td className="text-start p-2 ">{delivery.address}</td>
        <td className="  p-2 text-center">
          {delivery.status === "available" ? (
            <div className="py-0.5 px-3 inline mx-auto text-xs rounded-full bg-green-400 text-gray-600">
              {delivery.status}
            </div>
          ) : (
            <div className="py-0.5 px-3 inline mx-auto text-xs rounded-full bg-red-400 text-white">
              {delivery.status}
            </div>
          )}
        </td>
        <td className="  p-2 text-end">{delivery.totalDeliver}</td>

        <td className=" px-4 w-16 ps-8">
          <div className="flex w-full flex-row items-center justify-center gap-3">
            <svg
              onClick={() => setOpenModel(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-4 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
            <svg
              onClick={handleDeleteBtn}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-4 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </td>
      </tr>
      <div className="h-0">
        <Modal setOpenModal={setOpenModel} openModal={openModel}>
          <UpdateDeliveryForm setOpenModal={setOpenModel} oldData={delivery} />
        </Modal>
      </div>
    </>
  );
};

export default DeliveryTr;
