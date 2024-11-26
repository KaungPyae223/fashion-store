import Link from "next/link";
import React from "react";
import Image from "next/image";

interface BlogCardInterface {
  img: string;
  title: string;
  description: string;
  link: string;
  date:string;
}

const BlogCard = ({ img, title, description, link,date }:BlogCardInterface) => {
  return (
    <div>
      <img alt={title} className="h-[350px] w-full object-cover object-center" src={img} />
      <p className="mt-5 text-lg font-semibold tracking-wider">{title}</p>
      <p className="text-gray-500 text-xs mt-1">{date}</p>
      <p className="text-justify line-clamp-5 text-gray-500 mt-5 mb-3 text-sm">{description}</p>
      <Link href={link} className="text-gray-500 text-sm underline">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
