import PageTitle from "@/admin-side/components/PageTitle";
import CustomerListPage from "@/admin-side/features/customer-list/pages/CustomerListPage";
import React from "react";
import CustomerListAnimation from "@/assets/CustomerListAnimation.json";

const page = () => {
  return (
    <div>
      <PageTitle title="Customers List" subTitle="The data of all the customers" animate={CustomerListAnimation}/>
      <CustomerListPage />
    </div>
  );
};

export default page;
