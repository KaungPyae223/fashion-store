import Heros from "@/customer-side/components/Heros";
import React from "react";
import BlogContainer from "../components/BlogContainer";
import BlogImage from "@/assets/BlogImage.jpg";

const BlogPage = () => {
  return (
    <div>
      <Heros image={BlogImage.src} previousSection={[{title:"Home",link:"/"}]} title="Blogs" />
      <BlogContainer/>
    </div>
  );
};

export default BlogPage;
