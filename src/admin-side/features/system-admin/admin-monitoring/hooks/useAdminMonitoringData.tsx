import { fetchAdmin } from "@/admin-side/services/admin";
import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useUpdateParams from "@/hooks/useUpdateParams";
import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

export const useAdminMonitoringData = () => {
  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();

  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(
    AddParamsToURL(baseUrl + "/admin-monitoring")
  );

  const filterAdminNameRef = useRef();
  const roleRef = useRef();
  const timeRef = useRef();

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/admin-monitoring"));
    if (searchParams) {
      filterAdminNameRef.current.value = searchParams.get("name");
      roleRef.current.value = searchParams.get("role");
      timeRef.current.value = searchParams.get("time");
    }
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchAdmin);

  const handleFilter = throttle(() => {
    updateParams({
      name: filterAdminNameRef.current.value,
      role: roleRef.current.value,
      time: timeRef.current.value,
    });
  }, 500);

  return {
    handleFilter,
    data,
    isLoading,
    filterAdminNameRef,
    timeRef,
    roleRef,
    error,
  };
};
