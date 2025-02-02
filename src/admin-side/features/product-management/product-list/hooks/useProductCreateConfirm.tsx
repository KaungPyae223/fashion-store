import { storeProduct } from "@/admin-side/services/product";
import useProductStore from "@/admin-side/stores/useProductStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useProductCreateConfirm = () => {
  const { product } = useProductStore();

  const Brand = JSON.parse(product?.productProperties?.Brand || "{}");
  const Type = JSON.parse(product?.productProperties?.Type || "{}");
  const Color = JSON.parse(product?.productProperties?.Color || "{}");
  const Size = JSON.parse(product?.productProperties?.Size || "[]");

  const detailsImages = product.productDetailsImage.map(
    (image) => image.preview
  );

  const productDetailsPreviewData = {
    detailsImage: detailsImages,
    price: product?.productPrice?.SellPrice,
    color: Color.name,
    title: product?.productData?.Name,
    rating: 5,
    size: Size,
    description: product?.productData?.Description,
  };

  const [confirmText, setConfirmText] = useState<string>("");

  let category;
  switch (product?.productData?.CategoryID) {
    case "1":
      category = "Clothing";
      break;
    case "2":
      category = "Footwears";
      break;
    case "3":
      category = "Accessories";
      break;
    case "4":
      category = "Life Styles";
      break;
    default:
      category = "Unknown";
  }

  const router = useRouter();

  const DetailsImages = product.productDetailsImage.map((el) => {
    return el.file;
  });

  const Sizes = Size.map((el) => {
    return el.id;
  });

  const handleCreateProduct = async () => {
    try {
      const data = {
        type_id: Type.id,
        brand_id: Brand.id,
        category_id: product?.productData?.CategoryID,
        color_id: Color.id,
        name: product?.productData?.Name,
        cover_photo: product.productCoverImage.file,
        details_photos: DetailsImages,
        price: product?.productPrice?.Price,
        profit_percent: product?.productPrice?.Profit,
        description: product?.productData?.Description,
        status: product.productStatus,
        gender: product.productData.Gender,
        size_id: Sizes.join(","),
      };


      const res = await storeProduct(data);
      const json = await res.json();

      if (res.status !== 201) {
        toast.error(json.message);
        return;
      }

      toast.success("Product created successfully");
      
      router.push("/admin/product-list");
    } catch (error) {
      toast.error("An error occurred while creating the product.");
      console.error("Error:", error);
    }
  };

  return {
    handleCreateProduct,
    category,
    confirmText,
    setConfirmText,
    productDetailsPreviewData,
    Brand,
    Type,
    Color,
    Size,
    product,
  };
};
