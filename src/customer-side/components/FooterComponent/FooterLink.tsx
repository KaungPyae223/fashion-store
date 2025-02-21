import Link from "next/link";
import React from "react";

interface FooterLinkInterface {
  title: string;
  links: { name: string; link: string }[];
}

const FooterLink = ({ title, links }: FooterLinkInterface) => {
  return (
    <div>
      <p className="uppercase font-medium mb-5">{title}</p>
      <div className="gap-3 flex flex-col text-sm text-gray-500">
        {links.map((el, i) => (
          <Link
            href={el.link}
            key={i}
            className="cursor-pointer hover:text-gray-900"
          >
            {el.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLink;
