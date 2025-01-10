import Image from "next/image";
import React from "react";
import { useAdminConfirm } from "../../hooks/useAdminConfirm";

const AdminConfirm = ({
  setStage,
}: {
  setStage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { data, handleCreateAdmin, check, setCheck } = useAdminConfirm();

  return (
    <div className="w-[400px]">
      <p className="text-2xl font-medium tracking-wide">
        Confirm the admin Data
      </p>
      <Image
        alt="Preview Image"
        src={data.adminPhoto.preview}
        width={280}
        height={280}
        className="w-[400px] h-[300px] object-cover my-3"
      />
      <div className="my-3">
        <InformationContent data={data.admin.name} title="name" />
        <InformationContent data={data.admin.email} title="email" />
        <InformationContent data={data.admin.phone} title="phone" />
        <InformationContent data={data.admin.address} title="address" />
        <InformationContent data={data.adminRole} title="role" />
      </div>

      <div className="my-6 text-sm flex flex-row gap-3 ">
        <input
          onChange={(e) => setCheck(e.target.checked)}
          type="checkbox"
          id="confirm"
        />{" "}
        <label className="text-red-700 font-medium" htmlFor="confirm">
          Confirm Admin to Create
        </label>
      </div>

      <div className="flex flex-row mt-6 items-center justify-end w-[400px] gap-3">
        <button
          onClick={() => setStage(3)}
          className="px-9 py-2 border border-gray-800 "
        >
          Back
        </button>
        <button
          disabled={!check}
          onClick={handleCreateAdmin}
          className="px-9 py-2 bg-gray-800 text-white disabled:opacity-50"
        >
          Create
        </button>
      </div>
    </div>
  );
};

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

export default AdminConfirm;
