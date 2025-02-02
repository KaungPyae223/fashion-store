import MultipleImageUpload from "@/admin-side/components/MultipleImageUpload";
import useProductStore from "@/admin-side/stores/useProductStore";
import ProductBlankImage from "@/assets/image.png";
import Image from "next/image";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ProductDetailsImagesEntry = ({ setStage }) => {
  const {
    setProductDetailsImage,
    product: { productDetailsImage },
  } = useProductStore();

  const [detailImages, setDetailsImages] = useState(productDetailsImage);

  const handleDetailsImageUpload = (stage) => {
    if (detailImages == null) {
      toast.error("Please upload a product details image");
      return;
    }

    setProductDetailsImage(detailImages);
    setStage(stage);
  };

  return (
    <div className="min-w-[400px] w-fit">
      <Toaster />
      <p className="text-2xl font-medium tracking-wide">
        Product Details Image
      </p>
      <div className="mt-6">
        <div className="flex flex-col my-10">
          <label htmlFor="Description" className="text-sm text-gray-700 mb-2">
            Product details image ({detailImages?.length ?? 0}/4) *
          </label>
          {detailImages?.length ? (
            <div className="flex flex-wrap max-w-[700px] justify-start">
              {detailImages?.map((el, i) => (
                <Image
                  width={500}
                  height={500}
                  key={i}
                  alt="product details images"
                  src={el.preview}
                  className="w-1/2 p-1 object-cover"
                />
              ))}
            </div>
          ) : (
            <Image
              className="border mt-1.5 border-gray-300 cursor-pointer "
              src={ProductBlankImage}
              alt="Product Image"
              width={280}
              height={280}
            />
          )}
          <MultipleImageUpload setImages={setDetailsImages} />
        </div>
      </div>

      <div className="flex mt-6 flex-row items-center justify-end gap-3">
        <button
          onClick={() => handleDetailsImageUpload(4)}
          className="px-9 py-2 border border-gray-800 "
        >
          Back
        </button>

        <button
          onClick={() => handleDetailsImageUpload(6)}
          className="px-9 py-2 bg-gray-800 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsImagesEntry;
