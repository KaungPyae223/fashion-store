import Image from "next/image";
import React from "react";

const AdminMonitorTr = ({ activity }) => {
  return (
    <tr className="text-gray-800 bg-white border-y-[12px] border-y-gray-100">
      <td className="p-2 px-4 border-spacing-0">
        <div className="flex flex-row gap-6 items-center">
          <Image
            width={100}
            height={100}
            alt={activity.name + " image"}
            className="w-[50px] h-[50px] rounded-full object-cover"
            src={activity.photo}
          />
          <div>
            <p className="text-base font-medium">{activity.name}</p>
            <p className="text-sm text-gray-500">{activity.email}</p>
          </div>
        </div>
      </td>

      <td className="p-2 px-4 text-center border-spacing-0">
        {activity.role === "Product Management" ? (
          <div className="text-sm text-nowrap bg-green-400 px-4 py-1 rounded-full w-fit mx-auto">
            Product Management
          </div>
        ) : activity.role === "Customer Support" ? (
          <div className="text-sm text-nowrap bg-pink-400 px-4 py-1 rounded-full w-fit mx-auto">
            Customer Support
          </div>
        ) : activity.role === "Order Management" ? (
          <div className="text-sm text-nowrap bg-yellow-400 px-4 py-1 rounded-full w-fit mx-auto">
            Order Management
          </div>
        ) : activity.role === "Super Admin" ? (
          <div className="text-sm text-nowrap bg-zinc-400 px-4 py-1 rounded-full w-fit mx-auto">
            Super Admin
          </div>
        ) : activity.role === "System Admin" ? (
          <div className="text-sm text-nowrap bg-stone-400 px-4 py-1 rounded-full w-fit mx-auto">
            System Admin
          </div>
        ) : activity.role === "Blog Management" ? (
          <div className="text-sm text-nowrap bg-slate-400 px-4 py-1 rounded-full w-fit mx-auto">
            Blog Management
          </div>) : (
          <div className="text-sm text-nowrap border border-gray-400 px-4 py-1 rounded-full w-fit mx-auto">
            Retired
          </div>
        )}
      </td>
      <td className="p-2 px-4 text-start border-spacing-0 font-medium">
        {activity.method}
      </td>
      <td className="p-2 px-4 text-start border-spacing-0 font-medium">
        {activity.type}
      </td>
      <td className="p-2 px-4 text-start border-spacing-0">{activity.action}</td>
      <td className="p-2 px-4 text-end border-spacing-0 text-nowrap">{activity.time}</td>
    </tr>
  );
};

export default AdminMonitorTr;
