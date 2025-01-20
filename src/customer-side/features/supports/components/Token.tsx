import Link from "next/link";
import React from "react";

const Token = () => {
  return (
    <div>
      <div className="flex flex-col py-12 items-center justify-center gap-6">
        <p className="text-xl font-medium">Please Log In to Contact with Customer Supports</p>
        <Link href={"/authentication"}>
            <div className="bg-gray-800 px-6 py-2 text-white">
                Log In
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Token;
