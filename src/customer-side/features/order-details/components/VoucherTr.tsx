import React from "react";

const VoucherTr = ({
  index,
  name,
  size,
  unitPrice,
  Qty,
}: {
  index: number;
  name: string;
  size: string;
  unitPrice: number;
  Qty: number;
}) => {
  return (
    <tr className="cursor-pointer">
      <td className="px-4 pt-6">{index}</td>
      <td className="px-4 pt-6">{name}</td>
      <td className="px-4 pt-6">{size}</td>
      <td className="px-4 pt-6 text-end">{unitPrice}</td>
      <td className="px-4 pt-6 text-end">{Qty}</td>
      <td className="px-4 pt-6 text-end">{unitPrice * Qty}</td>
    </tr>
  );
};

export default VoucherTr;
