import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useUpdateParams from "@/hooks/useUpdateParams";
import useSWR from "swr";
import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { fetchOrder, fetchAllPayments } from "@/admin-side/services/order";

export const useCustomerOrderData = () => {
  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();

  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(
    AddParamsToURL(baseUrl + "/customer-order")
  );

  const customerNameRef = useRef();
  const OrderMonthRef = useRef();
  const paymentRef = useRef();

  const [paymentData, setPaymentData] = useState();

  useEffect(() => {
    const fetchPayment = async () => {
      setPaymentData(await fetchAllPayments());
    };

    fetchPayment();
  }, []);

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/customer-order"));
    const queryParam = searchParams;
    if (queryParam) {
      customerNameRef.current.value = queryParam.get("customer");
      OrderMonthRef.current.value = queryParam.get("orderMonth");
      paymentRef.current.value = queryParam.get("payment");
    }
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchOrder);

  const handleFilter = throttle(() => {
    updateParams({
      customer: customerNameRef.current.value,
      orderMonth: OrderMonthRef.current.value,
      payment: paymentRef.current.value,
    });
  }, 500);

  return {
    customerNameRef,
    OrderMonthRef,
    paymentRef,
    paymentData,
    handleFilter,
    data,
    isLoading,

    error,
  };
};
