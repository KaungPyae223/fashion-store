import React from "react";

const CustomerDataTr = () => {
  return (
    <tr className=" duration-100 hover:bg-gray-800 hover:text-white text-gray-800 bg-white border-y-[12px] border-y-gray-100">
      <td className="text-start p-2 ps-4 py-4 ">Royal Express</td>
      <td className="text-start p-2 ">0923052418</td>
      <td className="text-start p-2 ">
        www.info@royalexpress.com
      </td>
      <td className="text-start p-2 ">
        No.13 Aye Road, Yangon Township
      </td>
     
      <td className="  p-2 text-end">320</td>

      <td className=" w-10 ps-4 px-2">
        <div className="flex w-full flex-row items-center justify-center gap-3">
         

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-4 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          
        </div>
      </td>
    </tr>
  );
};

export default CustomerDataTr;
