import SearchPage from "@/customer-side/features/Search/SearchPage";
import React from "react";

const page = ({ params: { q } }) => {
  return (
    <div>
      <SearchPage q={q} />
    </div>
  );
};

export default page;
