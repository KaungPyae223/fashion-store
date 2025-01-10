import useSWR from "swr";
import { fetchPackageData } from "../../../../services/packaging";

export const usePackagingData = () => {
    const { data, error, isLoading } = useSWR(
        process.env.NEXT_PUBLIC_BASE_URL + "/order/package/11",
        fetchPackageData
    );
    return { data, error, isLoading };
};