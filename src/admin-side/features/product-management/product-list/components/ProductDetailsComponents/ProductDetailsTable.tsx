import React from "react";

const ProductDetailsTable = ({ data }) => {
  return (
    <div className="p-6 bg-white rounded-2xl col-span-3 shadow-md">
      <p className="text-2xl font-semibold tracking-wide mb-6">{data.name} Info</p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <InfoItem label="Name" value={data.name} />
        <InfoItem
          label="Status"
          value={
            <span
              className={`text-sm px-4 py-1 rounded-full font-medium ${
                data.status === "public"
                  ? "bg-green-400 text-gray-800"
                  : "bg-red-600 text-white"
              }`}
            >
              {data.status === "public" ? "Public" : "Private"}
            </span>
          }
        />
        <InfoItem label="Original Price" value={`${data.original_price} Ks`} />
        <InfoItem label="Profit Percent" value={`${data.profit_percent} %`} />
        <InfoItem label="Discount" value={`${data.discount_price} Ks`} />
        <InfoItem label="Sell Price" value={`${data.price} Ks`} />
        <InfoItem label="Category" value={data.category} />
        <InfoItem label="Brand" value={data.brand} />
        <InfoItem label="Type" value={data.type} />
        <InfoItem label="Gender" value={data.gender} />
        <InfoItem label="Color" value={data.color} />
        <div>
          <p className="text-sm font-semibold mb-1">Size:</p>
          <div className="flex flex-wrap gap-2">
            {data.sizes.map((el, index) => (
              <span
                key={el.id || index}
                className="text-sm bg-gray-200 text-gray-700 rounded-full px-3 py-0.5"
              >
                {el.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold text-base mb-2">Description:</p>
        <p className="text-sm text-justify text-gray-600 leading-relaxed">
          {data.description}
        </p>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-sm font-semibold text-gray-700 mb-1">{label}:</p>
    <p className="text-sm text-gray-600">{value}</p>
  </div>
);

export default ProductDetailsTable;
