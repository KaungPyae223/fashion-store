import AdminCheck from "@/admin-side/components/AdminCheck";
import PageTitle from "@/admin-side/components/PageTitle";
import PaymentManagementPage from "@/admin-side/features/super-admin/payment-management/page/PaymentManagementPage";
import PaymentManagement from "@/assets/PaymentManagement.json";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Payment Management"
        subTitle="Manage the payment information"
        animate={PaymentManagement}
      />
      <AdminCheck allow={"Super Admin"}>
        <PaymentManagementPage />
      </AdminCheck>
    </div>
  );
};

export default page;
