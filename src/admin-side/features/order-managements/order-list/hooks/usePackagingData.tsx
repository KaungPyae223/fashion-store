import useSWR from "swr";
import { fetchPackageData } from "../../../../services/packaging";

export const usePackagingData = (id) => {
  const { data, error, isLoading } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/order/package/" + id,
    fetchPackageData
  );
  return { data, error, isLoading };
};
