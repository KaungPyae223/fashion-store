"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import useAddParamsToURL from "@/hooks/useAddParamsToURL";

const NavLink = () => {
  const pathName = usePathname();

  const AddParamsToURL = useAddParamsToURL();

  return (
    <div className="py-3 flex items-center justify-center gap-6 border">
      <Link
        href={AddParamsToURL("/")}
        className={
          pathName == "/" ? "border-b border-b-gray-800" : "text-gray-500"
        }
      >
        Home
      </Link>
      <Link
        href={AddParamsToURL("clothing")}
        className={
          pathName.startsWith("/clothing")
            ? "border-b border-b-gray-800"
            : "text-gray-500"
        }
      >
        Clothing
      </Link>
      <Link
        href={AddParamsToURL("/brands")}
        className={
          pathName.startsWith("/brands")
            ? "border-b border-b-gray-800"
            : "text-gray-500"
        }
      >
        Brands
      </Link>
      <Link
        href={AddParamsToURL("/footwears")}
        className={
          pathName.startsWith("/footwears")
            ? "border-b border-b-gray-800"
            : "text-gray-500"
        }
      >
        Footwear
      </Link>
      <Link
        href={AddParamsToURL("/accessories")}
        className={
          pathName.startsWith("/accessories")
            ? "border-b border-b-gray-800"
            : "text-gray-500"
        }
      >
        Accessories
      </Link>
      <Link
        href={AddParamsToURL("/life-style")}
        className={
          pathName.startsWith("/life-style")
            ? "border-b border-b-gray-800"
            : "text-gray-500"
        }
      >
        Lifestyle
      </Link>
      <Link
        href={AddParamsToURL("/blogs")}
        className={
          pathName.startsWith("/blogs")
            ? "border-b border-b-gray-800"
            : "text-gray-500"
        }
      >
        Blogs
      </Link>
      <Link
        href={AddParamsToURL("/supports")}
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
