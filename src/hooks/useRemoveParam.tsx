'use client'
import { useSearchParams, useRouter } from "next/navigation";

const useRemoveParam = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const deleteParams = (keys: string | string[]) => {
    const updatedParams = new URLSearchParams(searchParams.toString());

    // Ensure `keys` is always an array
    const keysArray = Array.isArray(keys) ? keys : [keys];

    keysArray.forEach((key) => updatedParams.delete(key));

    // Update the URL without refreshing the page
    router.push(`?${updatedParams.toString()}`);
  };

  return deleteParams;
};

export default useRemoveParam;
