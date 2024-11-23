"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import { useSearchParams } from "next/navigation";
import useUpdateParams from "@/hooks/useUpdateParams";

const NavBody = () => {
  const [gender, setGender] = useState<string>("Men");

  const searchParams = useSearchParams();
  const updateParams = useUpdateParams();

  useEffect(() => {
    const genderParam = searchParams.get("gender");
    if (genderParam) {
      setGender(genderParam);
    } else {
    }
  }, []);

  const handleGenderChange = (newGender: string) => {
    updateParams("gender", newGender);
    setGender(newGender);
  };

  return (
    <Container>
      <div className="col-span-12 flex items-center justify-between py-3">
        <div className="flex items-center gap-5">
          <div
            onClick={() => handleGenderChange("Men")}
            className={`cursor-pointer font-medium uppercase ${
              gender === "Men" ? "" : "text-gray-400"
            }`}
          >
            Men
          </div>
          <div
            onClick={() => handleGenderChange("Women")}
            className={`cursor-pointer font-medium uppercase ${
              gender === "Women" ? "" : "text-gray-400"
            }`}
          >
            Women
          </div>
        </div>
        <div className="text-4xl font-bold">Alexa</div>
        <div className="flex flex-row gap-5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          <div className="px-6 py-1 rounded-full border cursor-pointer hover:bg-black hover:text-white duration-300">
            Log In
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavBody;
