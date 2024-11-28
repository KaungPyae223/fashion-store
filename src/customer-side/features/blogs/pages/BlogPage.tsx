import Heros from "@/customer-side/components/Heros";
import React from "react";
import BlogContainer from "../components/BlogContainer";

const BlogPage = () => {
  return (
    <div>
      <Heros previousSection={[{title:"Home",link:"/"}]} title="Blogs" />
      <BlogContainer/>
    </div>
  );
};

export default BlogPage;
