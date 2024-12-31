import PageTitle from "@/admin-side/components/PageTitle";
import React from "react";
import CustomerQuestionAnimation from "@/assets/CustomerQuestionAnimation.json";
import CustomersQuestionsPage from "@/admin-side/features/customer-support/customer-question/pages/CustomersQuestionsPage";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Customers Questions"
        subTitle="The questions ask from the customers"
        animate={CustomerQuestionAnimation}
      />
      <CustomersQuestionsPage />
    </div>
  );
};

export default page;
