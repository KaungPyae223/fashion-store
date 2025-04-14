import PageTitle from "@/admin-side/components/PageTitle";
import OrderAnalysisPage from "@/admin-side/features/super-admin/order-analysis/pages/OrderAnalysisPage";
import AnalyzeAnimation from "@/assets/AnalyzeAnimation.json";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Order Analysis"
        subTitle="Analyze the total Order of Alexa"
        animate={AnalyzeAnimation}
      />
      <OrderAnalysisPage/>
    </div>
  );
};

export default page;
