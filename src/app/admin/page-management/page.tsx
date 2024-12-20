import PageTitle from "@/admin-side/components/PageTitle";
import PageManagement from "@/admin-side/features/page_management/page/PageManagement";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle title="Page Management" />
      <PageManagement />
    </div>
  );
};

export default page;
