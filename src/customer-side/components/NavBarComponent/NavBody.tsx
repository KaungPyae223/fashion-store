"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import { useRouter, useSearchParams } from "next/navigation";
import useUpdateParams from "@/hooks/useUpdateParams";
import Link from "next/link";
import CheckToken from "./CheckToken";

interface NavBodyInterface {
  setOpenSearchSection: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenCraft: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBody = ({ setOpenSearchSection, setOpenCraft }: NavBodyInterface) => {
  const [gender, setGender] = useState<string>("");

  const searchParams = useSearchParams();
  const updateParams = useUpdateParams();

  useEffect(() => {
    const genderParam = searchParams.get("gender");
    if (genderParam) {
      setGender(genderParam);
    }
  }, []);

  const handleGenderChange = (newGender: string) => {
    updateParams({
      gender: newGender,
    });
    setGender(newGender);
  };

  const router = useRouter();

  const RouteToWishList = () => {
    router.push("/wishlist");
  };

  return (
    <Container>
      <div className="col-span-full flex items-center justify-between py-3">
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
        <Link href={"/"} className="text-4xl font-bold">
          Alexa
        </Link>
        <div className="flex flex-row gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={() => setOpenSearchSection(true)}
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
            strokeWidth={1}
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={RouteToWishList}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={() => setOpenCraft(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <CheckToken />
        </div>
      </div>
    </Container>
  );
};



export default NavBody;
