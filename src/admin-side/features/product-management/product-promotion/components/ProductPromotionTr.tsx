import { useFormatDate } from "@/hooks/useFormatDate";
import Image from "next/image";
import React from "react";

const ProductPromotionTr = ({
  product,
  setSelectedProducts,
  selectedProducts,
}) => {
  const checked = selectedProducts.some((el) => el.id === product.id);

  const handleCheckboxChange = () => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.some((el) => el.id === product.id)) {
        return prevSelected.filter((el) => el.id !== product.id);
      } else {
        return [
          ...prevSelected,
          {
            id: product.id,
            name: product.name,
            original_price: product.original_price,
            profit_percent: product.profit_percent,
            sell_price: product.sell_price,
            promotion_percent: product.discount
          },
        ];
      }
    });
  };

  const {formatDate} = useFormatDate();

  return (
    <tr
      className="text-gray-800 
        bg-white
        border-y-[12px] border-y-gray-100"
    >
      <td className="p-2 text-center border-spacing-0 ">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
      </td>
      <td className="p-2 border-spacing-0">
        <div className="flex flex-row gap-3 items-center">
          <Image
            alt={product.name + " image"}
            className="w-[70px] h-[70px] object-cover"
            width={70}
            height={70}
            src={product.cover_photo}
          />

          <p className="font-medium text-sm text-start">{product.name}</p>
        </div>
      </td>
      <td title="Product Quantity" className="text-end px-2">{product.qty}</td>
      <td title="Original Price" className="text-end px-2 text-nowrap">{product.original_price} Ks</td>
      <td title="Discount %" className="text-end px-2 text-nowrap ">{product.discount} %</td>
      <td title="Discount Amount" className="text-end px-2 text-nowrap ">{product.discount_amount} Ks</td>
      <td title="Discount Start Date" className="text-center px-2">{product.discount_start_date && formatDate(product.discount_start_date)}</td>
      <td title="Discount End Date" className="text-center px-2">{product.discount_end_date && formatDate(product.discount_end_date)}</td>
      <td title="Product Profit During Promotion" className="text-end text-nowrap px-2">{product.profit} Ks</td>
      <td title="Product Price at Current Time" className="text-end text-nowrap px-2">{product.sell_price} Ks</td>
      <td title="Product Promotion Price" className="text-end px-2">{product.promotion_sell_price} Ks</td>
      
    </tr>
  );
};

export default ProductPromotionTr;
