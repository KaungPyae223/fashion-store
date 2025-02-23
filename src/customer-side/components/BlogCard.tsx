import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useFormatDate } from "@/hooks/useFormatDate";

interface BlogCardInterface {
  img: string;
  title: string;
  link: string;
  date:string;
}

const BlogCard = ({ img, title, link,date }:BlogCardInterface) => {
  
  const {formatDate} = useFormatDate();
  
  return (
    <div>
      <Image height={500} width={500} alt={title} className="h-[350px] w-full object-cover object-center" src={img} />
      <p className="mt-5 text-lg font-semibold tracking-wider">{title}</p>
      <p className="text-gray-500 text-sm mt-1 mb-3">{formatDate(date)}</p>
      <Link href={link} className="text-gray-500 text-sm underline ">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
