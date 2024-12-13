import React from "react";

const PageTitle = ({title}:{title:string}) => {
  return (
    <div className="border-b mb-6 pb-6">
      <p className="text-lg font-medium uppercase tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default PageTitle;
