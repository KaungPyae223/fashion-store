import Image from "next/image";
import React from "react";

const OrderProductTable = ({products}) => {
  return (
    <div className="bg-white p-6">
      <table className="table-auto w-full text-left border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="border-b text-gray-500 text-sm">
            <th className="text-end pe-6 py-3 w-12 text-nowrap">ID</th>
            <th className="text-start px-2 py-3">Product</th>
            <th className="text-center py-3 px-2">Size</th>
            <th className="text-center py-3 px-2">Color</th>
            <th className="text-end py-3 px-2">Quantity</th>
            <th className="text-end py-3 px-2">Unit Price</th>
            <th className="text-end py-3 px-2">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => (
              <OrderProductTr key={product.id} product={product}/>
            ))
          }
         
        </tbody>
      </table>
    </div>
  );
};

const OrderProductTr = ({product}) => {
  return (
    <tr className="border-b last:border-b-0 text-sm">
      <td className="text-end pe-6 py-3 w-12 text-nowrap">{product.id}</td>
      <td className="text-start px-2 py-3 ">
        <div className="flex items-center gap-4 font-medium text-base">
          <Image
            src={product.cover_image}
            className="w-16 h-16 object-cover object-center"
            width={100}
            height={100}
            alt=""
          />
          {product.product_name}
        </div>
      </td>
      <td className="text-center py-3 px-2">{product.product_size}</td>
      <td className="text-center py-3 px-2">{product.product_color}</td>
      <td className="text-end py-3 px-2">{product.product_qty}</td>
      <td className="text-end py-3 px-2">{product.product_price} Ks</td>
      <td className="text-end py-3 px-2">{product.total_price} Ks</td>
    </tr>
  );
};

export default OrderProductTable;
