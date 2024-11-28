import Link from "next/link";
import React from "react";

interface BreadCrumbInterface {
  title: string;
  previousSection: { link: string; title: string }[];
}

const BreadCrumb = ({ title, previousSection }: BreadCrumbInterface) => {
  return (
    <div className="text-sm text-gray-500 flex flex-row gap-1.5 items-center">
      {previousSection.map((section) => (
        <>
          <Link className="hover:text-gray-800" href={section.link}>{section.title}</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </>
      ))}
      <p>{title}</p>
    </div>
  );
};

export default BreadCrumb;
