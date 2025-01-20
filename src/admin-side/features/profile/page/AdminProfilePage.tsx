import React from "react";
import AdminActivity from "../../system-admin/admin-management/components/details/AdminActivity";
import ProfileAdminData from "../components/ProfileAdminData";

const AdminProfilePage = () => {
  return (
    <div className="mt-6">
      <ProfileAdminData />
      <AdminActivity />
    </div>
  );
};

export default AdminProfilePage;
