"use client";
import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";
import { deleteBlog } from "@/admin-side/services/blog";
import { fetchBrand } from "@/admin-side/services/brand";
import useBlogStore from "@/admin-side/stores/useBlogStore";
import { useFormatDate } from "@/hooks/useFormatDate";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import useSWR from "swr";

const BlogDetailsPage = ({ id }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const { data, isLoading, error } = useSWR(
    baseUrl + "/blog/" + id,
    fetchBrand
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BlogData data={data} />
        </>
      )}
    </>
  );
};

export const BlogData = ({ data }) => {
  const router = useRouter();
  const { revalidate } = useRevalidatedData();
  const { formatDate } = useFormatDate();
  const { setData } = useBlogStore();

  const handleDeleteBlog = async () => {
    if (window.confirm("Are you sure to delete")) {
      try {
        const res = await deleteBlog(data.id);

        if (res.ok) {
          await revalidate("/blog");
          toast.success("Blog deleted successfully");
          router.push("/admin/blog-list");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleUpdate = () => {
    setData({
      id: data.id,
      title: data.title,
      coverImage: data.photo,
      content: data.content,
    });

    router.push("/admin/blog-list/details/" + data.id + "/update");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md mt-6">
      <Toaster />
      <div className="mb-6">
        <Image
          src={data.photo}
          width={400}
          height={250}
          alt="Blog Image"
          className="shadow-md object-cover w-full max-h-[400px]"
        />
      </div>

      <div className="mb-6">
        <p className="text-gray-800 text-3xl font-semibold">
          {data.title || "No title provided"}
        </p>
        <p className="text-gray-600 text-sm mt-3">
          {data.author} | {formatDate(data.time)}
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

      <div className="flex flex-row justify-end gap-3 mt-3 border-t border-t-gray-300 pt-6">
        <div
          onClick={handleDeleteBlog}
          className="px-5 py-1.5 border border-gray-500 duration-300 cursor-pointer hover:bg-gray-800 hover:text-white"
        >
          Delete
        </div>
        <div
          onClick={handleUpdate}
          className="px-5 py-1.5 border border-gray-500 duration-300 cursor-pointer hover:bg-gray-800 hover:text-white"
        >
          Update
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
