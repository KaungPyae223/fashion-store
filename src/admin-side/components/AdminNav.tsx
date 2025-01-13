"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import reactUseCookie, { getCookie } from "react-use-cookie";
import Image from "next/image";
import useSWR from "swr";
import { fetchAdmin } from "../services/admin";
import useAdminProfileStore from "../stores/useAdminProfileStore";
import NavContainer from "./NavComponent/NavContainer";

const AdminNav = () => {
  const pathName = usePathname();

  const [token] = reactUseCookie("token");
  const router = useRouter();

  const { setAdmin } = useAdminProfileStore();

  if (!token) {
    router.push("/admin-log-in");
  }

  const { data, isLoading, error } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/admin-data",
    fetchAdmin
  );

  useEffect(() => {
    if (!isLoading) {
      if (data) {
        setAdmin(data.admin);
      } else {
        router.push("/admin-log-in");
      }
    }
  }, [isLoading]);

  return (
    <div className="h-screen overflow-y-auto scrollbar-hide p-5 w-[300px] shadow flex flex-col">
      <p className="text-4xl font-bold text-center">Alexa</p>

      {!isLoading && (
        <>
          <NavContainer role={data.admin.role} pathName={pathName} />

          <LogOutButton data={data} />
        </>
      )}
    </div>
  );
};

const LogOutButton = ({ data }) => {
  return (
    <div className="mt-auto pt-20">
      <Link
        href={"/admin/profile"}
        className="flex flex-row gap-4 mb-6 items-center"
      >
        <Image
          width={100}
          height={100}
          alt="Profile Image"
          className="w-[50px] h-[50px] object-cover rounded-full"
          src={data.admin.admin.photo}
        />
        <div>
          <p className="text-gray-600">{data.admin.name}</p>
          <p className="text-sm text-gray-400">{data.admin.role}</p>
        </div>
      </Link>
      <hr></hr>
      <div className="flex flex-row items-center gap-3 mt-3 text-gray-500 hover:text-gray-700 duration-300 cursor-pointer py-3 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>

        <p className="font-medium">Log Out</p>
      </div>
    </div>
  );
};

export default AdminNav;
