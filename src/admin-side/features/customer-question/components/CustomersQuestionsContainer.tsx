import React from "react";
import CustomersQuestionsTr from "./CustomersQuestionsTr";
import AdminPagination from "@/admin-side/components/AdminPagimation";

const CustomersQuestionsContainer = () => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-start px-2">Customer</th>
            <th className="text-start px-4">Question</th>
            <th className="text-end px-2">Duration</th>
            <th className="px-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <CustomersQuestionsTr />
          <CustomersQuestionsTr />
          <CustomersQuestionsTr />
          <CustomersQuestionsTr />
          <CustomersQuestionsTr />
          <CustomersQuestionsTr />
        </tbody>
      </table>
      <AdminPagination />
    </div>
  );
};

export default CustomersQuestionsContainer;
