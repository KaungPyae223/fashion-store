import React from 'react'
import CategoryDataTr from './CategoryDataTr'

const SizeData = () => {
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
        <CategoryDataTr category="Clothing" name="small" />
        <CategoryDataTr category="Clothing" name="large" />
        <CategoryDataTr category="Footwear" name="Us 29" />
        <CategoryDataTr category="Accessories" name="one-size" />
        <CategoryDataTr category="Clothing" name="extreme large" />
      
      </tbody>
    </table>
  )
}

export default SizeData