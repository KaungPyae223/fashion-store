import PageTitle from "@/admin-side/components/PageTitle";
import CustomersQuestionsContainer from "@/admin-side/features/customer-question/components/CustomersQuestionsContainer";
import React from "react";
import CustomerQuestionAnimation from "@/assets/CustomerQuestionAnimation.json";

const page = () => {
  return (
    <div>
      <PageTitle title="Customers Questions" subTitle="The questions ask from the customers" animate={CustomerQuestionAnimation} />
      <CustomersQuestionsContainer />
    </div>
  );
};

export default page;
