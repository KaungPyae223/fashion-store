"use client";
import React from "react";
import AdminDataDetails from "../components/details/AdminDataDetails";
import AdminActivity from "../components/details/AdminActivity";

const AdminDetailsPage = ({ id }: { id: string }) => {
  return (
    <div className="mt-6">
      <AdminDataDetails id={id} />
      <AdminActivity id={id} />
    </div>
  );
};

export default AdminDetailsPage;
