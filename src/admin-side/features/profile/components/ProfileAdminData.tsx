"use client";
import InformationContent from "@/admin-side/components/InformationContent";
import Loading from "@/admin-side/components/Loading";
import Modal from "@/admin-side/components/Modal";
import NoData from "@/admin-side/components/NoData";
import { fetchAdmin } from "@/admin-side/services/admin";
import Image from "next/image";
import React, { useState } from "react";
import useSWR from "swr";
import PasswordUpdateForm from "./PasswordUpdateForm";
import useAdminProfileStore from "@/admin-side/stores/useAdminProfileStore";

const ProfileAdminData = () => {
  const { adminData } = useAdminProfileStore();

  console.log(adminData);

  return (
    <div>{!adminData ? <Loading /> : <AdminDetails data={adminData} />}</div>
  );
};

const AdminDetails = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-row gap-6">
      <Image
        src={data.admin.photo}
        alt={data.name + " image"}
        width={300}
        height={300}
        className="w-[150px] h-[150px] object-cover object-center"
      />
      <div>
        <p className="mb-3 text-3xl font-medium">{data.name}</p>
        <InformationContent data={data.email} title="email" />
        <InformationContent data={data.phone} title="phone" />
        <InformationContent data={data.address} title="address" />
        <InformationContent data={data.role} title="role" />
        <div
          onClick={() => setOpenModal(true)}
          className="mt-3 py-1.5 px-6 text-sm cursor-pointer bg-gray-800 w-fit text-white"
        >
          Password Change
        </div>
      </div>

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <PasswordUpdateForm setOpenModal={setOpenModal} />
      </Modal>
    </div>
  );
};

export default ProfileAdminData;
