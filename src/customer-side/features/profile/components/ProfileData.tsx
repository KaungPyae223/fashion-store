import SectionTitle from "@/customer-side/components/SectionTitle";
import React from "react";

const ProfileData = () => {
  return (
    <div>
      <SectionTitle title="Profile Data" />
      <p className="text-3xl font-semibold">Kaung Pyae Aung</p>
      <table className="my-6">
        <tbody>
          <tr className="mb-2">
            <td className="font-semibold pe-3">Email:</td>
            <td>kaungpyaeaung8123@gmail.com</td>
          </tr>
          <tr className="mb-2">
            <td className="font-semibold pe-3">Phone:</td>
            <td>+959-123-456-789</td>
          </tr>
          <tr className="mb-2">
            <td className="font-semibold pe-3">City:</td>
            <td>Yangon</td>
          </tr>
          <tr className="mb-2">
            <td className="font-semibold pe-3">Township:</td>
            <td>Kyee Myint Daing</td>
          </tr>
          <tr className="mb-2">
            <td className="font-semibold pe-3">Zip Code:</td>
            <td>078425</td>
          </tr>
          <tr className="mb-2">
            <td className="font-semibold pe-3">Address:</td>
            <td>No.123 Inya Road, Yangon Kyee Myint Daing</td>
          </tr>
          <tr className="mb-2">
            <td className="font-semibold pe-3">Total Orders:</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileData;
