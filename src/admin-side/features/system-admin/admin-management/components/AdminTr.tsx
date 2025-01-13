import Image from "next/image";
import Link from "next/link";
import React from "react";

const AdminTr = ({ admin }) => {
  return (
    <tr className="text-gray-800 bg-white border-y-[12px] border-y-gray-100">
      <td className="p-2 border-spacing-0">
        <div className="flex flex-row gap-6 items-center">
          <Image
            alt={admin.name + " image"}
            width={100}
            height={100}
            className="w-[50px] h-[50px] rounded-full object-cover"
            src={admin.photo}
          />
          <p className="text-lg font-medium">{admin.name}</p>
        </div>
      </td>
      <td className="p-2 border-spacing-0">{admin.email}</td>
      <td className="p-2 border-spacing-0">{admin.phone}</td>
      <td className="p-2 border-spacing-0">{admin.address}</td>
      <td className="p-2 text-center border-spacing-0">
        {admin.role === "Product Management" ? (
          <div className="text-sm bg-green-400 px-4 py-1 rounded-full w-fit mx-auto">
            Product Management
          </div>
        ) : admin.role === "Customer Support" ? (
          <div className="text-sm bg-pink-400 px-4 py-1 rounded-full w-fit mx-auto">
            Customer Support
          </div>
        ) : admin.role === "Order Management" ? (
          <div className="text-sm bg-yellow-400 px-4 py-1 rounded-full w-fit mx-auto">
            Order Management
          </div>
        ) : admin.role === "Super Admin" ? (
          <div className="text-sm bg-zinc-400 px-4 py-1 rounded-full w-fit mx-auto">
            Super Admin
          </div>
        ) : admin.role === "System Admin" ? (
          <div className="text-sm bg-stone-400 px-4 py-1 rounded-full w-fit mx-auto">
            System Admin
          </div>
        ) : (
          <div className="text-sm border border-gray-400 px-4 py-1 rounded-full w-fit mx-auto">
            Retired
          </div>
        )}
      </td>
      <td className="px-2">
        <div className="flex flex-row justify-center items-center gap-3">
          <Link href={`/admin/admin-management/update/${admin.id}`}>
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
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </Link>
          <Link href={`/admin/admin-management/details/${admin.id}`}>
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
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default AdminTr;
