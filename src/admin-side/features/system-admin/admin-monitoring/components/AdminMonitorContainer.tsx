"use client";
import React from "react";
import AdminMonitorTr from "./AdminMonitorTr";

const AdminMonitorContainer = ({ activities }) => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-start px-2">Admin</th>
            <th className="text-center px-2">Role</th>
            <th className="px-2 text-start">Method</th>
            <th className="px-2 text-start">Type</th>
            <th className="px-2 text-start">Action</th>
            <th className="px-2 text-end">Time</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <AdminMonitorTr key={activity.id} activity={activity} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMonitorContainer;
