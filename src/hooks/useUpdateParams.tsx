"use client";
import { useSearchParams, useRouter } from "next/navigation";

const useUpdateParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateParams = (key: string, value: string) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.set(key, value);
    if (key !== "page") {
      updatedParams.delete("page");
    }

    // Update the URL without refreshing the page
    router.push(`?${updatedParams.toString()}`);
  };

  return updateParams;
};

export default useUpdateParams;
