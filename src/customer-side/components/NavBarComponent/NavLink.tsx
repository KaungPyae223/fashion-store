"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

const NavLink = () => {
  const pathName = usePathname();

  const searchParams = useSearchParams();

  const changePage = (url) => {
    const gender = searchParams.get("gender");

    if (gender) {
      return `${url}?gender=${gender}`;
    } else {
      return url;
    }
  };

  return (
    <div className="p-3 flex items-center justify-center flex-wrap gap-6 border-y">
      <Link
        href={changePage("/")}
        className={
          pathName == "/" || pathName.startsWith("/details")
            ? "border-b border-b-gray-800"
            : "text-gray-500"
        }
      >
        Home
      </Link>
      <Link
        href={changePage("/clothing")}
        className={
          pathName.startsWith("/clothing")
            ? "border-b border-b-gray-800"
            : "text-gray-500"
        }
      >
        Clothing
      </Link>
      <Link
        href={changePage("/brands")}
        className={
          pathName.startsWith("/brands")
            ? "border-b border-b-gray-800"
            : "text-gray-500"
        }
      >
        Brands
      </Link>
      <Link
        href={changePage("/footwears")}
        className={
          pathName.startsWith("/footwears")
            ? "border-b border-b-gray-800"
            : "text-gray-500"
        }
      >
        Footwear
      </Link>
      <Link
        href={changePage("/accessories")}
        className={
          pathName.startsWith("/accessories")
            ? "border-b border-b-gray-800"
            : "text-gray-500"
        }
      >
        Accessories
      </Link>
      <Link
        href={changePage("/life-style")}
        className={
          pathName.startsWith("/life-style")
            ? "border-b border-b-gray-800"
            : "text-gray-500"
        }
      >
        Lifestyle
      </Link>
      <Link
        href={changePage("/blogs")}
        className={
          pathName.startsWith("/blogs")
            ? "border-b border-b-gray-800"
            : "text-gray-500"
        }
      >
        Blogs
      </Link>
      <Link
        href={changePage("/supports")}
        className={
          pathName.startsWith("/supports")
            ? "border-b border-b-gray-800"
            : "text-gray-500"
        }
      >
        Supports
      </Link>
    </div>
  );
};

export default NavLink;
