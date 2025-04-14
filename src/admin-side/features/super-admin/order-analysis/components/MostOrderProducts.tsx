import Image from "next/image";
import React from "react";

const MostOrderProducts = ({ data }) => {

  return (
    <div className="mt-6">
      <div className="max-w-7xl mx-auto bg-white shadow rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">
            Most Ordered Products
          </h2>
          <p className="text-sm text-gray-500">
            Top selling items with their details and order statistics
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Photo
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Brand
                </th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-xs text-center font-bold text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-xs text-center font-bold text-gray-500 uppercase tracking-wider">
                  Total Order Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {data?.map((data, i) => (
                <ProductTr data={data} index={i + 1} key={i} />
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const ProductTr = ({ data, index }) => {
  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="px-6 py-4 text-sm text-gray-700">{index}</td>
      <td className="px-6 py-4">
        <Image
          src={data.img}
          width={50}
          height={50}
          alt="Cheeseburger"
          className="w-12 h-12 rounded-full object-cover"
        />
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-800">
        {data.name}
      </td>
      <td className="px-6 py-4 text-sm text-gray-600">{data.category}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{data.brand}</td>
      <td className="px-6 py-4 text-sm text-gray-800 font-semibold">
        {data.price}
      </td>
      <td className="px-6 py-4 text-sm text-center text-gray-700">{data.quantity}</td>
      <td className="px-6 py-4 text-sm text-center">{data.total}</td>
    </tr>
  );
};

export default MostOrderProducts;
