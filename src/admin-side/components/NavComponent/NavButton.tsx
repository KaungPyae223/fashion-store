import Link from "next/link";
import React from "react";

interface NavButtonInterface {
  pathName: string;
  href: string;
  name: string;
  icon: React.ReactElement
}

const NavButton = ({ pathName, href, name, icon }: NavButtonInterface) => {
  return (
    <Link
      href={href}
      className={` ${
        pathName.startsWith(href)
          ? "admin-nav-active admin-nav-shadow"
          : "admin-nav"
      } flex flex-row items-center gap-3 cursor-pointer p-3 rounded `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="size-5"
      >
        {icon}
      </svg>
      <p className="font-medium">{name}</p>
    </Link>
  );
};

export default NavButton;
