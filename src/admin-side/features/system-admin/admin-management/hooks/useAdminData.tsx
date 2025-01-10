import { fetchAdmin } from "@/admin-side/services/admin";
import useAdminStore from "@/admin-side/stores/useAdminStore";
import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useUpdateParams from "@/hooks/useUpdateParams";
import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

export const useAdminData = () => {
  const { resetData } = useAdminStore();

  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();

  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(AddParamsToURL(baseUrl + "/admin"));

  const filterAdminNameRef = useRef();
  const roleRef = useRef();

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/admin"));
    if (searchParams) {
      filterAdminNameRef.current.value = searchParams.get("name");
      roleRef.current.value = searchParams.get("role");
    }
  }, [searchParams]);

  useEffect(() => {
    resetData();
  }, []);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchAdmin);

  const handleFilter = throttle(() => {
    updateParams({
      name: filterAdminNameRef.current.value,
      role: roleRef.current.value,
    });
  }, 500);

  return {
    handleFilter,
    data,
    isLoading,
    filterAdminNameRef,
    roleRef,
    error,
  };
};
