"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useBlogStore from "@/admin-side/stores/useBlogStore";
import React from "react";

const BlogCreateConfirmPage = () => {
  const { data } = useBlogStore();
  const router = useRouter();

  const handleSubmit = () => {
    // Simulate sending data to an API
    console.log("Submitting Blog:", data);
    alert("Blog submitted successfully!");

    // Redirect to blog list after submission
    router.push("/admin/blog-list");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md mt-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Confirm Your Blog</h1>

      {/* Blog Title */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Title:</h2>
        <p className="text-gray-600">{data.title || "No title provided"}</p>
      </div>

      {/* Blog Image */}
      {data.image && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Blog Image:</h2>
          <Image
            src={URL.createObjectURL(data.image)}
            width={400}
            height={250}
            alt="Blog Image"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      )}

      {/* Blog Content */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Content:</h2>
        <div className="p-4 border border-gray-300 rounded-md bg-gray-100">
          <p
            dangerouslySetInnerHTML={{ __html: data.content || "No content provided" }}
            className="text-gray-600"
          ></p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => router.push("/blog-list/create")}
          className="px-6 py-2 bg-gray-500 text-white rounded shadow-md hover:bg-gray-600 transition"
        >
          Edit
        </button>

        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-600 text-white rounded shadow-md hover:bg-green-700 transition"
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  );
};

export default BlogCreateConfirmPage;
