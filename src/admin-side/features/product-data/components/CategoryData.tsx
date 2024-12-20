import React from "react";
import CategoryDataTr from "./CategoryDataTr";

const CategoryData = () => {
  return (
    <table className="w-full bg-white">
      <thead>
        <tr className="text-gray-800">
          <th className="text-start p-1 px-1.5 border border-gray-300">Type</th>
          <th className="text-start p-1 px-1.5 border-y border-y-gray-300">
            Relative Category
          </th>
          <th className="text-start p-1 px-1.5 border-y border-y-gray-300 border-e border-e-gray-300"></th>
        </tr>
      </thead>
      <tbody>
        <CategoryDataTr category="Clothing" name="T-Shirt" />
        <CategoryDataTr category="Clothing" name="Ginger" />
        <CategoryDataTr category="Footwear" name="Sneaker" />
        <CategoryDataTr category="Accessories" name="Hat" />
        <CategoryDataTr category="Clothing" name="Skirt" />
      
      </tbody>
    </table>
  );
};



export default CategoryData;
