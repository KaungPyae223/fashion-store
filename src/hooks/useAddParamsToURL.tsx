"use client";
import { useSearchParams } from "next/navigation";

const useAddParamsToURL = () => {

  const searchParams = useSearchParams();

  const AddParamsToURL = (url: string) => {
    if (searchParams) {
      const params = new URLSearchParams(searchParams.toString());
      return `${url}?${params.toString()}`;
    }
    return url;
  };

  return AddParamsToURL

};

export default useAddParamsToURL;
