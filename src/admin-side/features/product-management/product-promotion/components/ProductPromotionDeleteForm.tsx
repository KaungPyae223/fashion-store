import { deletePromotion } from "@/admin-side/services/promotion";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import React, { useEffect } from "react";

const ProductPromotionDeleteForm = ({
  setOpenModal,
  setSelectedProducts,
  selectedProducts,
}) => {
  useEffect(() => {
    if (selectedProducts.length == 0) {
      setOpenModal(false);
    }
  }, [selectedProducts]);

  const { revalidate } = useRevalidatedData();

  const handleDeleteProductPromotion = async () => {
    try {
      await Promise.all(
        selectedProducts.map((data) => deletePromotion(data.id))
      );

      setSelectedProducts([]);
      await revalidate("/product/promotion");

      setOpenModal(false);
    } catch (error) {
      console.error("Error creating promotions:", error);
    }
  };

  return (
    <div className="p-3 py-6 h-[75vh] flex flex-col gap-6">
      <p className="text-xl text-center font-medium  border-b pb-3 border-b-gray-300">
        Promotion Delete ({selectedProducts.length})
      </p>

      <div className="overflow-y-auto ps-2 flex flex-col">
        <table className=" w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
          <thead>
            <tr className="text-sm text-gray-400">
              <th className="text-start px-2">Product</th>

              <th className="text-start px-4">Sell Price</th>

              <th className="text-center "></th>
            </tr>
          </thead>
          <tbody>
            {selectedProducts.map((product) => (
              <ProductPromotionTr
                promotion={product.promotion_percent}
                key={product.id}
                product={product}
                setSelectedProducts={setSelectedProducts}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-row justify-end gap-3 mt-auto">
        <div
          onClick={() => {
            setOpenModal(false);
          }}
          className="py-2 cursor-pointer w-20 border border-gray-300 text-center"
        >
          Cancel
        </div>
        <div
          onClick={handleDeleteProductPromotion}
          className="py-2 cursor-pointer w-20 bg-gray-800 text-white text-center"
        >
          Delete
        </div>
      </div>
    </div>
  );
};

const ProductPromotionTr = ({ product, promotion, setSelectedProducts }) => {
  const discount_percent = promotion;

  const sellPrice =
    product.original_price +
    (product.original_price * product.profit_percent) / 100;

  const newSellPrice = sellPrice - (sellPrice * discount_percent) / 100;

  const deleteBth = () => {
    setSelectedProducts((prevSelected) => {
      return prevSelected.filter((el) => el.id !== product.id);
    });
  };

  return (
    <tr className="text-gray-800 bg-slate-100 border-y-[12px] border-y-white">
      <td className="text-start p-2 py-4">
        <p className="font-medium text-sm text-start">{product.name}</p>
      </td>

      <td className="text-start p-2 px-4">
        <div className="flex flex-row gap-3">
          <p className="line-through text-gray-500">{product.sell_price}</p>
          <p>{newSellPrice}</p>
        </div>
      </td>

      <td className="text-center p-2 ">
        <svg
          onClick={deleteBth}
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
      </td>
    </tr>
  );
};

export default ProductPromotionDeleteForm;
