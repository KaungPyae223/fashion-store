"use client";
import Container from "@/customer-side/components/Container";
import React, { useRef } from "react";
import VoucherTr from "../components/VoucherTr";
import SectionTitle from "@/customer-side/components/SectionTitle";
import { useReactToPrint } from "react-to-print";

const OrderDetailsPage = ({ orderID }: { orderID: string }) => {
  interface productInterface {
    name: string;
    size: string;
    unitPrice: number;
    Qty: number;
  }

  const Products: productInterface[] = [
    {
      name: "Nike Air Force F1 2024",
      size: "US 40",
      unitPrice: 450000,
      Qty: 1,
    },
    {
      name: "Sisburma Winter Jacket",
      size: "Gray",
      unitPrice: 200000,
      Qty: 1,
    },
    {
      name: "Nike CR7 hat",
      size: "White",
      unitPrice: 350000,
      Qty: 2,
    },
  ];

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({
    contentRef,
  });

  return (
    <div className="py-10">
      <Container>
        <div className=" pb-3 border-b col-span-12 flex items-center justify-between">
          <div className="flex flex-1 text-xl flex-row gap-3 items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
            Back
          </div>
          <div className="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 mx-auto cursor-pointer"
              onClick={reactToPrintFn}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
              />
            </svg>
          </div>
          <p className="text-xl flex-1 uppercase text-end font-medium tracking-wider">
            Order Details
          </p>
        </div>
        <div ref={contentRef} className="col-span-12 print:p-5">
          <div className="flex justify-between border-b pb-5">
            <div className="">
              <p className="text-xl font-medium border-b pb-1.5 mb-1.5">
                {orderID}
              </p>
              <p className="uppercase tracking-wide text-sm font-semibold my-2">
                Billed to
              </p>
              <p className="text-sm">Ma Moe Moe</p>
              <p className="text-sm">moe123@gmail.com</p>
              <p className="text-sm">09254013725</p>
            </div>
            <div className="flex justify-center flex-col items-center">
              <p className="text-5xl font-semibold flex-1">Alexa</p>
              <p className="py-1.5 px-3 border-y mt-3 font-medium">
                21 November 2024
              </p>
              <p className="text-sm my-2">Order Invoice</p>
            </div>
          </div>
          <p className="text-center mt-5 mb-10 uppercase tracking-wide text-xl font-medium">
            Order Products
          </p>
          <div className="border-b pb-5">
            <table className="w-full">
              <thead>
                <tr>
                  <td className="p-3 text-lg px-4 mb-3 font-semibold bg-gray-200">
                    No
                  </td>
                  <td className="p-3 text-lg px-4 font-semibold bg-gray-200">
                    Product Name
                  </td>
                  <td className="p-3 text-lg px-4 font-semibold bg-gray-200">
                    Size
                  </td>
                  <td className="p-3 text-lg px-4 font-semibold bg-gray-200 text-end">
                    Unit Price
                  </td>
                  <td className="p-3 text-lg px-4 font-semibold bg-gray-200 text-end">
                    Qty
                  </td>
                  <td className="p-3 text-lg px-4 font-semibold bg-gray-200 text-end">
                    Price
                  </td>
                </tr>
              </thead>
              <tbody>
                {Products.map((product, i) => (
                  <VoucherTr
                    index={i + 1}
                    name={product.name}
                    size={product.size}
                    unitPrice={product.unitPrice}
                    Qty={product.Qty}
                  />
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5} className="px-4 pt-12 text-end">
                    Sub Total
                  </td>
                  <td className="px-4 pt-12 text-end">1350000</td>
                </tr>
                <tr>
                  <td colSpan={5} className="px-4 pt-3 text-end">
                    Tax (5%)
                  </td>
                  <td className="px-4 pt-3 text-end">675000</td>
                </tr>
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 pt-3 text-lg font-semibold text-end"
                  >
                    Total Price
                  </td>
                  <td className="px-4 pt-3 text-end text-lg font-semibold">
                    2025000
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="grid grid-cols-3 gap-5 pt-14 pb-6">
            <div>
              <SectionTitle title="Ship to" />
              <table>
                <tbody>
                  <tr>
                    <td className="pe-3 font-medium">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </td>
                    <td>Ma Moe Moe</td>
                  </tr>
                  <tr>
                    <td className="pe-2 font-medium">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                        />
                      </svg>
                    </td>
                    <td>moemoe123@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="pe-2 font-medium">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                    </td>
                    <td>0923245168</td>
                  </tr>
                  <tr>
                    <td className="pe-2 font-medium">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                        />
                      </svg>
                    </td>
                    <td>No 123 Ayeyarwady road, Yangon, Burma </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center border-x h-full">
              <div>
                <SectionTitle title="Payment Information" />
                <table>
                  <tbody>
                    <tr>
                      <td className="pe-2 font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                          />
                        </svg>
                      </td>
                      <td>21 November 2024</td>
                    </tr>
                    <tr>
                      <td className="pe-2 font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                          />
                        </svg>
                      </td>
                      <td>KBZ pay</td>
                    </tr>
                    <tr>
                      <td className="pe-2 font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </td>
                      <td>Complete</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-end">
              <div>
                <SectionTitle title="Contact Information" />
                <table>
                  <tbody>
                    <tr>
                      <td className="pe-2 font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                          />
                        </svg>
                      </td>
                      <td>123 Ahlone Road, Ahlone, Yangon, Myanmar</td>
                    </tr>
                    <tr>
                      <td className="pe-2 font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                          />
                        </svg>
                      </td>
                      <td>+959 123 456 789</td>
                    </tr>
                    <tr>
                      <td className="pe-2 font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                          />
                        </svg>
                      </td>
                      <td>info@alexa.com</td>
                    </tr>
                    <tr>
                      <td className="pe-2 font-medium ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </td>
                      <td>Mon–Fri, 9 AM–5 PM (EST)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="text-sm flex justify-start gap-3 print:border-b pb-8 pt-4">
            <p className="font-medium">Note: </p>
            <p className="text-justify"></p>
          </div>
          <div className="hidden print:flex flex-row items-center justify-between">
            <p className="uppercase tracking-wide font-medium text-lg py-3">
              Thank You for ordering
            </p>
            <p>www.alexa.com.mm</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderDetailsPage;
