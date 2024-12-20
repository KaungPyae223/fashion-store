import SectionTitle from "@/customer-side/components/SectionTitle";
import Link from "next/link";
import React from "react";

const OrderHistory = () => {
  return (
    <div>
      <SectionTitle title="Order History" />
      <div className="mt-6">
        <div className="py-3 border-b">
          <div className="flex flex-row items-center gap-5">
            <p className="text-2xl font-medium">INV-17860-12-11-2024</p>
          </div>
          <table className="my-3">
            <tbody>
              <tr className="pb-2">
                <td className="font-semibold pe-2 text-sm">Date:</td>
                <td className="text-sm">12 June 2024</td>
              </tr>
              <tr className="pb-2">
                <td className="font-semibold pe-2 text-sm">Receiver:</td>
                <td className="text-sm">Daw Moe Thant</td>
              </tr>
              <tr className="pb-2">
                <td className="font-semibold pe-2 text-sm">Phone:</td>
                <td className="text-sm">0923051728</td>
              </tr>
              <tr className="pb-2">
                <td className="font-semibold pe-2 text-sm">Address:</td>
                <td className="text-sm">
                  No. 28 Ahlone Road, Ahlone Town, Yangon.
                </td>
              </tr>
              <tr className="pb-2">
                <td className="font-semibold pe-2 text-sm">Total Price:</td>
                <td className="text-sm">235000 Ks</td>
              </tr>
            </tbody>
          </table>
          <Link
            href={"/order-details/INV-17860-12-11-2024"}
            className="my-3  inline-block bg-black text-white py-2 px-12"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
