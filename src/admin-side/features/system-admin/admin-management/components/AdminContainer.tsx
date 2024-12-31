import AdminPagination from "@/admin-side/components/AdminPagimation";
import React from "react";
import AdminTr from "./AdminTr";

const AdminContainer = () => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-start px-2">Admin</th>
            <th className="text-start px-2">Email</th>
            <th className="text-start px-2">Phone</th>
            <th className="text-start px-2">Address</th>
            <th className="text-center px-2">Role</th>
            <th className="px-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <AdminTr />
          <AdminTr />
          <AdminTr />
          <AdminTr />
          <AdminTr />
          <AdminTr />
          <AdminTr />
          <AdminTr />

        </tbody>
      </table>
      <AdminPagination />
    </div>
  );
};

export default AdminContainer;
