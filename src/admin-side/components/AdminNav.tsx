"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import reactUseCookie, { getCookie, removeCookie } from "react-use-cookie";
import Image from "next/image";
import useSWR from "swr";
import { fetchAdmin, logOut } from "../services/admin";
import useAdminProfileStore from "../stores/useAdminProfileStore";
import NavContainer from "./NavComponent/NavContainer";
import toast from "react-hot-toast";

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

  const [check, setCheck] = useState(true);


  useEffect(() => {
    const fetchAdminData = async () => {
      const data = await fetchAdmin(process.env.NEXT_PUBLIC_BASE_URL + "/admin-data");

      if (data?.admin) {
        setAdmin(data.admin);
        setCheck(false);
      } else {
        toast.error(data.message);
        router.push("/admin-log-in");
      }
    };

    fetchAdminData();

  }, []);

  return (
    <div className="h-screen overflow-y-auto scrollbar-hide p-5 w-[300px] shadow flex flex-col">
      <p className="text-4xl font-bold text-center">Alexa</p>

      {!isLoading && !check && (
        <>
          <NavContainer role={data.admin.role} pathName={pathName} />

          <ProfileSection data={data} />
        </>
      )}
    </div>
  );
};

const ProfileSection = ({ data }) => {
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      const res = await logOut();
      const json = await res.json();

      if (res.status !== 200) {
        toast.error(json.message);
        return;
      }

      toast.success("Log Out Success");
      removeCookie("token");

      router.push("/admin-log-in");
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
      <div
        onClick={handleLogOut}
        className="flex flex-row items-center gap-3 mt-3 text-gray-500 hover:text-gray-700 duration-300 cursor-pointer py-3 rounded"
      >
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
