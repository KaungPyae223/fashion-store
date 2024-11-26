import React from "react";

interface NavNotificationTextProps {
  title: string;
}

const NavNotificationText = ({ title }: NavNotificationTextProps) => {
  return (
    <div className="flex flex-row items-center gap-6 text-nowrap">
      {title}
      <span className="w-[4px] h-[4px] rounded-full bg-white"></span>
    </div>
  );
};

export default NavNotificationText;
