import React from "react";

const CategoryTable = ({ categories }) => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-start px-2 ps-4">Category</th>
            <th className="text-start px-2">Brands</th>
            <th className="text-start px-2">Types</th>
            <th className="text-start px-2">Sizes</th>
            <th className="text-end px-2 pe-4">Total Products</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <CategoryTr category={category} key={category.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CategoryTr = ({ category }) => {
  return (
    <tr className="text-gray-800 bg-white border-y-[12px] border-y-gray-100">
      <td className="p-2 ps-4 py-4 border-spacing-0">
        <p className="font-medium text-base text-start">{category.category}</p>
      </td>
      <td className="px-2 text-start">
        <div className="flex flex-row gap-2">
          {category.brands.map((el, i) => (
            <p
              key={i}
              className="text-xs border border-gray-500 px-3 py-0.5 rounded-full"
            >
              {el}
            </p>
          ))}
        </div>
      </td>
      <td className="px-2 text-start">
        <div className="flex flex-row gap-2">
          {category.types.map((el, i) => (
            <p
              key={i}
              className="text-xs text-gray-800 bg-green-200 px-3 py-0.5 rounded-full"
            >
              {el}
            </p>
          ))}
        </div>
      </td>
      <td className="px-2 text-start">
        <div className="flex flex-row gap-2">
          {category.sizes.map((el, i) => (
            <p
              key={i}
              className="text-xs text-gray-500 bg-gray-200 px-3 py-0.5 rounded-full"
            >
              {el}
            </p>
          ))}
        </div>
      </td>

      <td className="px-2 pe-4 text-end">{category.total_products}</td>
    </tr>
  );
};

export default CategoryTable;
