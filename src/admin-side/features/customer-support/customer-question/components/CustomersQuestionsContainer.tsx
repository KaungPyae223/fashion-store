'use client'
import React from "react";
import CustomersQuestionsTr from "./CustomersQuestionsTr";

const CustomersQuestionsContainer = ({questions,handleRevalidate}) => {

  

  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-start px-2 ps-4">Customer</th>
            <th className="text-start px-4">Question</th>
            <th className="text-end px-2">Duration</th>
            <th className="px-2 text-center w-28">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            questions.map((question)=>(
              <CustomersQuestionsTr handleRevalidate={handleRevalidate} question= {question} key={question.id} />
            ))
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default CustomersQuestionsContainer;
