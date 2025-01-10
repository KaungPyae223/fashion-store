import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useUpdateParams from "@/hooks/useUpdateParams";
import useSWR from "swr";
import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { fetchOrder } from "@/admin-side/services/order";

export const useOrderHistoryData = () => {
  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();

  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(
    AddParamsToURL(baseUrl + "/order/order-history")
  );

  const customerNameRef = useRef();
  const OrderMonthRef = useRef();
  const OrderIdRef = useRef();
  const AdminRef = useRef();

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/order/order-history"));
    const queryParam = searchParams;
    if (queryParam) {
      customerNameRef.current.value = queryParam.get("customer");
      OrderMonthRef.current.value = queryParam.get("orderMonth");
      OrderIdRef.current.value = queryParam.get("orderId");
      AdminRef.current.value = queryParam.get("admin");
    }
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchOrder);

  const handleFilter = throttle(() => {
    updateParams({
      customer: customerNameRef.current.value,
      orderMonth: OrderMonthRef.current.value,
      orderId: OrderIdRef.current.value,
      admin:AdminRef.current.value
    });
  }, 500);

  return {
    customerNameRef,
    OrderMonthRef,
    OrderIdRef,
    AdminRef,
    handleFilter,
    data,
    isLoading,

    error,
  };
};
