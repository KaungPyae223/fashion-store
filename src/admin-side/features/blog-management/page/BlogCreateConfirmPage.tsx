"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useBlogStore from "@/admin-side/stores/useBlogStore";
import { storeBlog } from "@/admin-side/services/blog";
import React from "react";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import toast, { Toaster } from "react-hot-toast";

const BlogCreateConfirmPage = () => {
  const { data } = useBlogStore();
  const router = useRouter();
  const { revalidate } = useRevalidatedData();

  const handleSubmit = async () => {
    try {
      const res = await storeBlog(data);
      const json = await res.json();

      if (res.status !== 201) {
        toast.error(json.message);
        return;
      }
      await revalidate("/blog");
      toast.success("Blog created successfully");

      router.push("/admin/blog-list")

    } catch (error) {
      toast.error("An error occurred while creating blog.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md mt-6">
      <Toaster />
      {data.image && (
        <div className="mb-6">
          <Image
            src={URL.createObjectURL(data.image)}
            width={400}
            height={250}
            alt="Blog Image"
            className="shadow-md object-cover w-full max-h-[400px]"
          />
        </div>
      )}
      <div className="mb-6">
        <p className="text-gray-800 text-3xl font-semibold">
          {data.title || "No title provided"}
        </p>
      </div>

      {/* Blog Content */}
      <div className="mb-6">
        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: data.content || "No content provided",
            }}
          ></p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-gray-800 text-white shadow-md transition"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default BlogCreateConfirmPage;
