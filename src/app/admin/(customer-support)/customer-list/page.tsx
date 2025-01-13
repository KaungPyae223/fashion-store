import PageTitle from "@/admin-side/components/PageTitle";
import CustomerListPage from "@/admin-side/features/customer-support/customer-list/pages/CustomerListPage";
import React from "react";
import CustomerListAnimation from "@/assets/CustomerListAnimation.json";
import AdminCheck from "@/admin-side/components/AdminCheck";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Customers List"
        subTitle="The data of all the customers"
        animate={CustomerListAnimation}
      />
      <AdminCheck allow={"Customer Support"}>
        <CustomerListPage />
      </AdminCheck>
    </div>
  );
};

export default page;
