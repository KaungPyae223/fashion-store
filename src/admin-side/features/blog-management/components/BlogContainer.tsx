import { useFormatDate } from "@/hooks/useFormatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogContainer = ({ data }) => {
  return (
    <div className="my-6 grid grid-cols-4 gap-4">
      {data.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

const BlogCard = ({ blog }) => {
  const { formatDate } = useFormatDate();

  return (
    <div className="h-full">
      <Image
        alt={blog.title}
        height={500}
        width={500}
        className="h-[200px] w-full object-cover object-center"
        src={blog.photo}
      />
      <p className="mt-5 text-lg font-semibold tracking-wider">{blog.title}</p>
      <p className="text-gray-500 text-xs mt-1 mb-3">{formatDate(blog.time)}</p>

      <Link
        href={"/admin/blog-list/details/" + blog.id}
        className="text-gray-500 text-sm underline "
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogContainer;
