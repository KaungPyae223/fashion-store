import PageTitle from "@/admin-side/components/PageTitle";
import CustomersQuestionsContainer from "@/admin-side/features/customer-question/components/CustomersQuestionsContainer";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle title="Customers Questions" />
      <CustomersQuestionsContainer />
    </div>
  );
};

export default page;
