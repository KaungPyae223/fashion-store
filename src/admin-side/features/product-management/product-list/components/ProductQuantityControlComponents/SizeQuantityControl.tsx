"use client";
import { updateQuantity } from "@/admin-side/services/quantity";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

const SizeQuantityControl = ({ size, qty, id, product_id }) => {
  const [newQty, setNewQty] = useState<number>(0);

  const addQtyRef = useRef();
  const removeQtyRef = useRef();

  const handleQtyChange = () => {
    const addQty = addQtyRef.current.value
      ? parseInt(addQtyRef.current.value)
      : 0;
    const removeQty = removeQtyRef.current.value
      ? parseInt(removeQtyRef.current.value)
      : 0;

    if (addQty == 0 && removeQty == 0) {
      setNewQty(0);
      return;
    }

    setNewQty(qty + parseInt(addQty) - parseInt(removeQty));
  };

  const { revalidateWithoutParam } = useRevalidatedData();

  const updateProductQty = async () => {
    const res = await updateQuantity(id, newQty);
    const json = await res.json();

    if (!res.ok) {
      toast.error(json.message);
      return;
    }

    toast.success("Quantity updated successfully");
    addQtyRef.current.value = "";
    removeQtyRef.current.value = "";
    setNewQty(0);
    revalidateWithoutParam("/product/get-quantity/" + product_id);
  };

  return (
    <tr className="border-b">
      <td>{size}</td>
      <td className={"text-end py-5"}>{qty}</td>
      <td className={"text-end"}>
        <input
          ref={addQtyRef}
          onChange={handleQtyChange}
          type="number"
          className="w-10 text-end border outline-none p-1"
        />
      </td>

      <td className={"text-end"}>
        <input
          ref={removeQtyRef}
          onChange={handleQtyChange}
          type="number"
          className="w-10 text-end border outline-none p-1"
        />
      </td>
      <td className={"text-end pe-3"}>{newQty}</td>
      <td className="text-end">
        <button
          onClick={updateProductQty}
          className="w-14 text-center cursor-pointer bg-blue-500 text-white  border outline-none p-1"
        >
          Save
        </button>
      </td>
    </tr>
  );
};

export default SizeQuantityControl;
