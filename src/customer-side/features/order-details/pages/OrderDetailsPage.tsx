"use client";
import Container from "@/customer-side/components/Container";
import React, { useRef } from "react";
import VoucherTr from "../components/VoucherTr";
import SectionTitle from "@/customer-side/components/SectionTitle";
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/navigation";
import { getCookie } from "react-use-cookie";
import { fetchCustomer } from "@/customer-side/services/HomePage";
import useSWR from "swr";
import { useFormatDate } from "@/hooks/useFormatDate";

const OrderDetailsPage = ({ orderID }: { orderID: string }) => {
  const user_token = getCookie("user_token");

  const Router = useRouter();

  if (!user_token) {
    Router.push("/authentication");
  }

  const { isLoading, data, error } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + `/order-details/${orderID}`,
    fetchCustomer
  );

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({
    contentRef,
  });

  const routeBack = () => {
    Router.back();
  };

  const { formatDate } = useFormatDate();

  return (
    !isLoading && (
      <div className="py-10">
        <Container>
          <div className=" pb-3 border-b col-span-full flex items-center justify-between">
            <div
              onClick={routeBack}
              className="flex flex-1 text-xl flex-row gap-3 items-center cursor-pointer"
            >
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
          <div ref={contentRef} className="col-span-full print:p-5">
            <div className="flex justify-between border-b pb-5">
              <div className="">
                <p className="text-xl font-medium border-b pb-1.5 mb-1.5">
                  INV-{orderID}
                </p>
                <p className="uppercase tracking-wide text-sm font-semibold my-2">
                  Billed to
                </p>
                <p className="text-sm">{data.order.name}</p>
                <p className="text-sm">{data.order.email}</p>
                <p className="text-sm">{data.order.phone}</p>
              </div>
              <div className="flex justify-center flex-col items-center">
                <p className="text-5xl font-semibold flex-1">Alexa</p>
                <p className="py-1.5 px-3 border-y mt-3 font-medium">
                  {formatDate(data.order.order_date)}
                </p>
                <p className="text-sm my-2 uppercase tracking-widest">
                  Order Invoice
                </p>
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
                  {data.order_details.map((product, i) => (
                    <VoucherTr
                      key={i}
                      index={i + 1}
                      name={product.name}
                      size={product.size}
                      unitPrice={product.unit_price}
                      Qty={product.quantity}
                    />
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="px-4 pt-12 text-end">
                      Sub Total
                    </td>
                    <td className="px-4 pt-12 text-end">
                      {data.order.sub_total}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={5} className="px-4 pt-3 text-end">
                      Tax (5%)
                    </td>
                    <td className="px-4 pt-3 text-end">{data.order.tax}</td>
                  </tr>
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 pt-3 text-lg font-semibold text-end"
                    >
                      Total Price
                    </td>
                    <td className="px-4 pt-3 text-end text-lg font-semibold">
                      {data.order.total_price}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="flex flex-row justify-between gap-5 pt-14 pb-6">
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
                      <td>{data.order.receiver_name}</td>
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
                      <td>{data.order.receiver_email}</td>
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
                      <td>{data.order.receiver_phone}</td>
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
                      <td>{data.order.receiver_address} </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex  md:justify-end">
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
              <p className="text-justify">{data.order.note}</p>
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
    )
  );
};

export default OrderDetailsPage;
