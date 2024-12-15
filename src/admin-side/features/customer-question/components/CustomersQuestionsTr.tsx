import React from "react";

const CustomersQuestionsTr = () => {
  return (
    <tr className="duration-100 hover:bg-gray-800 hover:text-white text-gray-800 bg-white border-y-[12px] border-y-gray-100">
      <td className="p-2  text-start">
        <div className="pe-4 border-e">
          <p className="text-lg mb-0.5">U Hla Aye</p>
          <p className="text-xs">uhla123@gmail.com</p>
        </div>
      </td>
      <td className="p-2 px-4 text-justify text-base">
        Why we are better than other products ?
      </td>
      <td className="text-end p-2 ">3 days</td>
      <td className="text-center p-2 ">
        <div className="px-4 py-1 border border-gray-300 inline-block cursor-pointer">
          Answer
        </div>
      </td>
    </tr>
  );
};

export default CustomersQuestionsTr;
