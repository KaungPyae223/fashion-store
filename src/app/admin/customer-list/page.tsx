import PageTitle from "@/admin-side/components/PageTitle";
import CustomerListPage from "@/admin-side/features/customer-list/pages/CustomerListPage";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle title="Customers List" />
      <CustomerListPage />
    </div>
  );
};

export default page;
