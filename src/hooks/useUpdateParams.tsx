"use client";
import { useSearchParams, useRouter } from "next/navigation";

const useUpdateParams = () => {
  
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateParams = (params: Record<string, string>) => {

    const updatedParams = new URLSearchParams(searchParams.toString());
    
    Object.entries(params).forEach(([key, value]) => {
      updatedParams.set(key, value);
    });

    if (!params.hasOwnProperty("page")) {
      updatedParams.delete("page");
    }

    router.push(`?${updatedParams.toString()}`);

  };

  return updateParams;
};

export default useUpdateParams;
