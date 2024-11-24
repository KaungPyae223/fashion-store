import React from "react";

interface FooterLinkInterface {
  title: string;
  links: string[];
}

const FooterLink = ({ title, links }: FooterLinkInterface) => {
  return (
    <div>
      <p className="uppercase font-medium mb-5">{title}</p>
      <div className="gap-3 flex flex-col text-sm text-gray-500">
        {links.map((el,i) => (
          <p key={i} className="cursor-pointer hover:text-gray-900">{el}</p>
        ))}
      </div>
    </div>
  );
};

export default FooterLink;
