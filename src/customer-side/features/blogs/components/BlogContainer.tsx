"use client";
import AdminPagination from "@/admin-side/components/AdminPagimation";
import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";
import BlogCard from "@/customer-side/components/BlogCard";
import Container from "@/customer-side/components/Container";
import Pagination from "@/customer-side/components/Pagination";
import { fetchHome } from "@/customer-side/services/HomePage";
import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const BlogContainer = () => {
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender");

  const AddParamsToURL = useAddParamsToURL();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(
    AddParamsToURL(baseUrl + "/customer-product/1")
  );

  const { data, isLoading, error } = useSWR(fetchUrl, fetchHome);

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/get-blogs"));
  }, [searchParams]);

  console.log(data);

  return (
    <div className="py-10">
      {isLoading ? (
        <Loading />
      ) : data.data && data?.data.length ? (
        <>
          <BlogsContainer gender={gender} blogs={data.data} />
          <AdminPagination meta={data?.meta} />
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

const BlogsContainer = ({ blogs, gender }) => {
  return (
    <Container>
      <div className="col-span-full grid grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard
            img={blog.photo}
            link={"/blogs/" + blog.id + (gender ? "?gender=" + gender : "")}
            date={blog.time}
            title={blog.title}
            key={blog.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default BlogContainer;
