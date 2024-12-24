'use client'
import { useSearchParams, useRouter } from "next/navigation";

const useRemoveParam = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const deleteParam = (key: string) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    
    updatedParams.delete(key)

    router.push(`?${updatedParams.toString()}`);
  };

  return deleteParam;
};

export default useRemoveParam;
