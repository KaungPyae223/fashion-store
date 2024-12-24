import AdminPagination from "@/admin-side/components/AdminPagimation";
import React from "react";

const CategoryTable = () => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-start px-2">Category</th>
            <th className="text-start px-2">Brands</th>
            <th className="text-start px-2">Types</th>
            <th className="text-start px-2">Sizes</th>
            <th className="text-end px-2">Total Products</th>
          </tr>
        </thead>
        <tbody>
          <CategoryTr />
          <CategoryTr />
          <CategoryTr />
          <CategoryTr />
          <CategoryTr />
          <CategoryTr />
          <CategoryTr />
          <CategoryTr />
          <CategoryTr />
        </tbody>
      </table>
      <AdminPagination />
    </div>
  );
};

const CategoryTr = () => {
  return (
    <tr className="text-gray-800 bg-white border-y-[12px] border-y-gray-100">
      <td className="p-2 py-4 border-spacing-0">
        <p className="font-medium text-base text-start">Clothing</p>
      </td>
      <td className="px-2 text-start">
        <div className="flex flex-row gap-2">
          <p className="text-xs border border-gray-500 px-3 py-0.5 rounded-full">
            Nike
          </p>
          <p className="text-xs border border-gray-500 px-3 py-0.5 rounded-full">
            Adidas
          </p>
        </div>
      </td>
      <td className="px-2 text-start">
        <div className="flex flex-row gap-2">
          <p className="text-xs text-gray-800 bg-green-200 px-3 py-0.5 rounded-full">
            T - shirt
          </p>
          <p className="text-xs text-gray-800 bg-green-200 px-3 py-0.5 rounded-full">
            Blouses
          </p>
          <p className="text-xs text-gray-800 bg-green-200 px-3 py-0.5 rounded-full">
            Skirts
          </p>
          <p className="text-xs text-gray-800 bg-green-200 px-3 py-0.5 rounded-full">
            Gingers
          </p>
        </div>
      </td>
      <td className="px-2 text-start">
        <div className="flex flex-row gap-2">
          <p className="text-xs text-gray-500 bg-gray-200 px-3 py-0.5 rounded-full">
            Small
          </p>
          <p className="text-xs text-gray-500 bg-gray-200 px-3 py-0.5 rounded-full">
            Large
          </p>
          <p className="text-xs text-gray-500 bg-gray-200 px-3 py-0.5 rounded-full">
            XL
          </p>
          <p className="text-xs text-gray-500 bg-gray-200 px-3 py-0.5 rounded-full">
            2XL
          </p>
        </div>
      </td>

      <td className="px-2 text-end">50</td>
      
    </tr>
  );
};

export default CategoryTable;
