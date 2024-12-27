"use client";
import React from "react";
import CustomersQuestionsContainer from "../components/CustomersQuestionsContainer";
import AdminPagination from "@/admin-side/components/AdminPagimation";
import NoData from "@/admin-side/components/NoData";
import Loading from "@/admin-side/components/Loading";
import { useCustomerQuestionsData } from "../hooks/useCustomerQuestionsData";
import { Toaster } from "react-hot-toast";

const CustomersQuestionsPage = () => {

  const {
    handleRevalidate,
    data,
    isLoading,
    error
  } = useCustomerQuestionsData()


  return (
    <div>
      <Toaster/>
      {isLoading ? (
        <Loading />
      ) : data?.data.length > 0 ? (
        <>
          <CustomersQuestionsContainer questions={data.data} handleRevalidate={handleRevalidate}/>
          <AdminPagination meta={data?.meta} />
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default CustomersQuestionsPage;
