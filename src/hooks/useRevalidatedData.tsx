import { useCallback } from "react";
import { mutate } from "swr";
import useAddParamsToURL from "./useAddParamsToURL"; // Adjust the import path as needed

export const useRevalidatedData = () => {
  const addParamsToURL = useAddParamsToURL();
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const revalidate = useCallback(async (path) => {
    const fetchUrl = addParamsToURL(baseURL + path);

    // Revalidate the data
    await mutate(fetchUrl);
  }, [addParamsToURL, baseURL]);

  return { revalidate };
};
