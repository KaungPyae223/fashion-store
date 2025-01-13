import React from "react";

const InformationContent = ({
  data,
  title,
}: {
  data: string;
  title: string;
}) => {
  return (
    <div className="text-sm  mt-0.5 flex flex-row gap-1.5">
      <div className="font-medium text-gray-500">{title}:</div>{" "}
      <div>{data}</div>
    </div>
  );
};

export default InformationContent;
