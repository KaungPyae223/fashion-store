import PageManagement from "@/admin-side/features/page_management/page/PageManagement";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="border-b mb-6 pb-6">
        <p className="text-lg font-medium uppercase tracking-widest">
          Page Management
        </p>
      </div>
      <PageManagement />
    </div>
  );
};

export default page;
