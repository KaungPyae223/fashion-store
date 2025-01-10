import { deliveredPackage } from "@/admin-side/services/packaging";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useReactToPrint } from "react-to-print";

const ReceiverInformation = ({ select, setCurrentStage, receiverInfo }) => {
  const [confirm, setConfirm] = useState(false);

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({
    contentRef,
  });

  const router = useRouter();

  const {revalidate} = useRevalidatedData();

  const handleDeliver = async () => {
    try {
      const res = await deliveredPackage(receiverInfo.id, select);

      const json = await res.json();

      if (res.status != 200) {
        toast.error(json.message);
        return;
      }

      toast.success("Order delivered successfully");

      await revalidate("/order-list");

      router.push("/admin/order-list");

    } catch (error) {
      toast.error("An error occurred while updating the product.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="py-9">
      <p className="text-xl text-center font-medium tracking-wide mb-3">
        Receiver Information
      </p>
      <div ref={contentRef} className="mt-6 bg-white p-6 flex flex-col gap-3">
        <p className="text-2xl font-medium">{receiverInfo.name}</p>
        <p>{receiverInfo.phone}</p>
        <p>{receiverInfo.email}</p>
        <p>{receiverInfo.address}</p>
        <p className="text-sm text-gray-800 text-justify">
          <span className="font-semibold">Note:</span> {receiverInfo.note}
        </p>
      </div>
      <div
        onClick={reactToPrintFn}
        className="my-6 w-fit flex flex-row items-center gap-3 bg-gray-800 text-white px-4 py-2 text-sm cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
          />
        </svg>
        Print Receiver Information
      </div>
      <div className="flex flex-row gap-2 items-center">
        <input
          onChange={(e) => setConfirm(e.target.checked)}
          type="checkbox"
          id="Confirm"
        />
        <label htmlFor="Confirm" className="text-sm select-none">
          I have already completed all stages of packaging and delivering the
          orders.
        </label>
      </div>
      <div className="flex mt-6 flex-row items-center justify-end gap-3">
        <button
          onClick={() => setCurrentStage(3)}
          className="px-9 py-2 disabled:opacity-50 border border-gray-800 "
        >
          Back
        </button>
        <button
          disabled={!confirm}
          onClick={handleDeliver}
          
          className="px-9 py-2 disabled:opacity-50 bg-gray-800 text-white"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default ReceiverInformation;
