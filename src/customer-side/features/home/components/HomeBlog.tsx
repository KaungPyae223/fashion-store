"use client";
import React from "react";
import { HomeTitle } from "./HomeTitle";
import Container from "../../../components/Container";
import BlogCard from "../../../components/BlogCard";

const HomeBlog = ({data}) => {
  
  return (
    <div className="pt-16 pb-6 mb-12">
      <Container>
        <HomeTitle title="Blogs" link="/blogs" />
        <div className="col-span-full grid grid-cols-3 gap-x-8">
          {data.map((blog) => (
            <BlogCard
              img={blog.photo}
              link={"/blogs/"+blog.id}
              date={blog.time}
              title={blog.title}
              key={blog.id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomeBlog;
