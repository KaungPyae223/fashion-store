import React from "react";

const AdminMonitorTr = () => {
  return (
    <tr className="text-gray-800 bg-white border-y-[12px] border-y-gray-100">
      <td className="p-2 border-spacing-0">
        <div className="flex flex-row gap-6 items-center">
          <img
            className="w-[50px] h-[50px] rounded-full object-cover"
            src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2470"
          />
          <div>
            <p className="text-base font-medium">Mr Michael</p>
            <p className="text-sm text-gray-500">michael123@gmail.com</p>
          </div>
        </div>
      </td>

      <td className="p-2 text-center border-spacing-0">
        <div className="text-sm bg-green-400 px-4 py-1 rounded-full w-fit mx-auto">
          Main Admin
        </div>
      </td>
      <td className="p-2 text-start border-spacing-0 font-medium">
        Create
      </td>
      <td className="p-2 text-start border-spacing-0 font-medium">
        Product
      </td>
      <td className="p-2 text-start border-spacing-0">
        Create a product Hocololo
      </td>
      <td className="p-2 text-end border-spacing-0">
        3 days ago
      </td>
    </tr>
  );
};

export default AdminMonitorTr;
