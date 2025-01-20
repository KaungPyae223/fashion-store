import useProductStore from "@/admin-side/stores/useProductStore";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { fetchProduct } from "../../../../services/product";
import toast from "react-hot-toast";
import useSWR from "swr";

export const useProductPropertiesEntry = (setStage) => {
  const {
    setProductProperties,
    product: { productProperties, productData },
  } = useProductStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Brand: productProperties.Brand,
      Type: productProperties.Type,
      Color: productProperties.Color,
    },
  });

  const [size, setSize] = useState(JSON.parse(productProperties.Size));

  const [nextStage, setNextStage] = useState(0);

  const SizeRef = useRef();

  const AddSize = () => {
    if (SizeRef.current.value) {
      const selectedSize = JSON.parse(SizeRef.current.value);
      const exists = size.some((el) => el?.id == selectedSize.id);

      if (!exists) {
        setSize([...size, selectedSize]);
      }
    }
  };

  const removeSize = (data) => {
    setSize(size.filter((el) => el.id !== data));
  };

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchURL =
    baseUrl +
    "/product/properties?category=" +
    productData.CategoryID +
    "&gender=" +
    productData.Gender;

  const { data, isLoading, error } = useSWR(fetchURL, fetchProduct);

  const handleStoreProductProperties = (data) => {
    if (size.length == 0) {
      toast.error("Add a product size");
      return;
    }

    const productProperties = {
      Brand: data.Brand,
      Type: data.Type,
      Color: data.Color,
      Size: JSON.stringify(size),
    };

    setProductProperties(productProperties);

    setStage(nextStage);
  };

  const brandData = data?.brands.map((el) => {
    return {
      id: JSON.stringify(el),
      name: el.name,
    };
  });

  const typeData = data?.types.map((el) => {
    return {
      id: JSON.stringify(el),
      name: el.name,
    };
  });

  const colorData = data?.colors.map((el) => {
    return {
      id: JSON.stringify(el),
      name: el.name,
    };
  });

  return {
    brandData,
    typeData,
    colorData,
    register,
    handleSubmit,
    errors,
    size,
    setSize,
    nextStage,
    setNextStage,
    SizeRef,
    handleStoreProductProperties,
    data,
    isLoading,
    error,
    AddSize,
    removeSize,
  };
};
