import AdminCheck from "@/admin-side/components/AdminCheck";
import PageTitle from "@/admin-side/components/PageTitle";
import BlogListPage from "@/admin-side/features/blog-management/page/BlogListPage";
import React from "react";
import BlogAnimate from "@/assets/OrderListAnimation.json";


const page = () => {
  return (
    <div>
      <PageTitle
        title="Blog List"
        subTitle="The list of the all Alexa's Blogs"
        animate={BlogAnimate}
      />
      <AdminCheck allow={"Blog Management"}>
        <BlogListPage />
      </AdminCheck>
    </div>
  );
};

export default page;
