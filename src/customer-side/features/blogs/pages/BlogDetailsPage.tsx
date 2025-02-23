"use client";
import { useFormatDate } from "@/hooks/useFormatDate";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const BlogDetailsPage = ({ id }) => {
  const { formatDate } = useFormatDate();

  const route = useRouter();

  const navigateBack = () => {
    route.back();
  };

  const [blog, setBlog] = useState();

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/get-blog-details/${id}`
      );
      const json = await res.json();
      setBlog(json);
    };
    fetchBlog();
  }, []);

  console.log(blog);

  return (
    blog && (
      <div className="max-w-3xl mx-auto p-6 my-12 bg-white shadow-md ">
        <div className="mb-5 flex flex-row justify-between items-center">
          <div
            onClick={navigateBack}
            className="flex flex-1 text-xl flex-row gap-3  items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
            Back
          </div>
          <p className="text-gray-700 text-xl font-medium">
            {blog.title || "No title provided"}
          </p>
        </div>

        <div className="mb-6">
          <Image
            src={blog.photo}
            width={400}
            height={250}
            alt="Blog Image"
            className="shadow-md object-cover w-full max-h-[400px]"
          />
        </div>
        <p className="text-gray-800 text-3xl font-semibold">
          {blog.title || "No title provided"}
        </p>
        <div className="mb-6">
          <p className="text-gray-600 text-sm mt-3">
            {blog.author} | {formatDate(blog.time)}
          </p>
        </div>

        {/* Blog Content */}
        <div className="mb-6">
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html: blog.content || "No content provided",
              }}
            ></p>
          </div>
        </div>
      </div>
    )
  );
};

export default BlogDetailsPage;
