import React from "react";
import AdminActivity from "../../system-admin/admin-management/components/details/AdminActivity";
import ProfileAdminData from "../components/ProfileAdminData";

const AdminProfilePage = () => {
  return (
    <div className="mt-6">
      <ProfileAdminData id={1} />
      <AdminActivity id={1} />
    </div>
  );
};

export default AdminProfilePage;
