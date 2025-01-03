import React from "react";

const ProductDetailsTable = ({data}) => {
  return (
    <div className="p-5 bg-white">
      <p className="text-xl tracking-wider font-medium">{data.name} Info</p>
      <div className="mt-5">
        <table className="mt-4">
          <tbody>
            <tr>
              <td className="pe-2 pb-1 font-semibold">Name:</td>
              <td className="pb-1">{data.name}</td>
            </tr>
            <tr>
              <td className="pe-2 pb-1 font-semibold">Status:</td>
              <td className="pb-1">
                {data.status === "public" ? (
                  <div className="text-sm bg-green-400 text-gray-700 w-fit rounded-full px-5 py-0.5">
                    Public
                  </div>
                ) : (
                  <div className="text-sm bg-red-600 text-white w-fit rounded-full px-5 py-0.5">
                    Private
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <td className="pe-2 pb-1 font-semibold">Price:</td>
              <td className="pb-1">{data.price} Ks</td>
            </tr>
            <tr>
              <td className="pe-2 pb-1 font-semibold">Category:</td>
              <td className="pb-1">{data.category}</td>
            </tr>
            <tr>
              <td className="pe-2 pb-1 font-semibold">Brand:</td>
              <td className="pb-1">{data.brand}</td>
            </tr>
            <tr>
              <td className="pe-2 pb-1 font-semibold">Type:</td>
              <td className="pb-1">{data.type}</td>
            </tr>
            <tr>
              <td className="pe-2 pb-1 font-semibold">Gender:</td>
              <td className="pb-1">{data.gender}</td>
            </tr>
            <tr>
              <td className="pe-2 pb-1 font-semibold">Color:</td>
              <td className="pb-1">{data.color}</td>
            </tr>
            <tr>
              <td className="pe-2 pb-1 font-semibold">Size:</td>
              <td className="pb-1">
                <div className="flex flex-row gap-2">
                  {data.sizes.map((el, index) => (
                    <div
                      key={el.id || index}
                      className="text-sm text-gray-600 bg-gray-300 rounded-full px-2 py-0.5"
                    >
                      {el.name}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <p className="font-semibold my-1.5 mt-3">Description:</p>
          <p className="text-justify text-sm">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTable;
