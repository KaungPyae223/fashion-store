import PageTitle from "@/admin-side/components/PageTitle";
import React from "react";
import ProfileAnimation from "@/assets/ProfileAnimation.json";
import AdminProfilePage from "@/admin-side/features/profile/page/AdminProfilePage";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Profile"
        subTitle="Profile of the admin"
        animate={ProfileAnimation}
      />
      <AdminProfilePage />
    </div>
  );
};

export default page;
