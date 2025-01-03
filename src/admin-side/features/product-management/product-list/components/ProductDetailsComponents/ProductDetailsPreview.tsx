import ProductData from "@/customer-side/features/product-details/components/ProductData";
import React from "react";

const ProductDetailsPreview = ({ data }) => {
  const productDetailsPreviewData = {
    detailsImage: data.product_images.map((el) => {return el.url}),
    price: data.price,
    color: data.color,
    title: data.name,
    rating: 5,
    size: data.sizes,
    description: data.description,
  };

  return (
    <div className="bg-white p-5 col-span-3">
      <p className="text-xl tracking-wider font-medium mb-5">
        Product Details Section Preview
      </p>
      <ProductData productData={productDetailsPreviewData} />
    </div>
  );
};

export default ProductDetailsPreview;
