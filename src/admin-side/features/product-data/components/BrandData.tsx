import React from "react";

const BrandData = () => {
  return (
    <table className="w-full bg-white">
      <thead>
        <tr className="text-gray-800">
          <th className="text-start p-1 px-1.5 border-y border-s border-s-gray-300 border-y-gray-300">Brands</th>
          
          <th className="text-start p-1 px-1.5 border-y border-y-gray-300 border-e border-e-gray-300"></th>
        </tr>
      </thead>
      <tbody>
        <BrandDataTr brand="Nike" />
        <BrandDataTr brand="Adidas" />
        <BrandDataTr brand="Puma" />
        <BrandDataTr brand="Logo" />
        <BrandDataTr brand="Giordano" />
        <BrandDataTr brand="Wiki" />
      </tbody>
    </table>
  );
};

const BrandDataTr = ({
  brand,
}: {
    brand: string;
}) => {
  return (
    <tr className="text-gray-700">
      <td className="text-start p-1 px-1.5 border-y border-s border-s-gray-300 border-y-gray-300">{brand}</td>
      
      <td className="text-start  p-1 px-1.5 border-y border-y-gray-300 border-e border-e-gray-300">
        <div className="flex flex-row gap-2 items-center justify-end">
          <svg
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
  );
};

export default BrandData;
