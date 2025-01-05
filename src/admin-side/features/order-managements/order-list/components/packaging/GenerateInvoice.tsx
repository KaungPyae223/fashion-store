import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const GenerateInvoice = ({ id,setCurrentStage }) => {
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({
    contentRef,
  });

  return (
    <div className="py-9">
      <p className="text-xl text-center font-medium tracking-wide mb-3">
        Adding Invoice
      </p>
      <div
        ref={contentRef}
        className="mt-6 print:mt-0 bg-white p-1.5 print:flex print:flex-col print:h-screen"
      >
        <div className="flex flex-col items-center justify-center w-fit mx-auto">
          <p className="text-3xl px-2 text-center font-semibold mt-6 uppercase tracking-wider">
            Alexa
          </p>
          <p className="text-center border-y text-sm mx-auto border-gray-300 w-full py-0.5 my-1.5 text-gray-700">
            24 June 2024
          </p>
          <p className="text-center text-sm text-gray-500">INV: {id}</p>
        </div>

        <div className="px-6 pt-6 flex-1">
          <table className="table-auto mt-6 w-full  text-left text-sm border-spacing-y-4 border-spacing-x-0">
            <thead>
              <tr className="text-sm text-gray-600">
                <th className="py-3 text-start pe-6">Product</th>
                <th className="py-3 text-center px-6">Size</th>
                <th className="py-3 text-end px-6">Unit Price</th>
                <th className="py-3 px-6 text-end">Quantity</th>
                <th className="py-3 ps-6 text-end">Sub Total</th>
              </tr>
            </thead>
            <tbody>
              <InvoiceTr />
              <InvoiceTr />
              <InvoiceTr />
              <InvoiceTr />
              <tr>
                <td colSpan={4} className="pt-3 text-end pe-6">
                  Total Price
                </td>
                <td className="pt-3 ps-6 text-end">15000 Ks</td>
              </tr>
              <tr>
                <td colSpan={4} className="py-2 text-end pe-6">
                  Tax
                </td>
                <td className="pt-1.5 ps-6 text-end">15000 Ks</td>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <td className="py-2 border-t w-32 text-nowrap text-end pe-6 font-medium">
                  Total Amount
                </td>
                <td className="py-2 ps-6 border-t text-end  font-medium">
                  15000 Ks
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-auto pt-12">
          <p className="text-center text-xs font-medium text-gray-700">
            Thank You For Your Order
          </p>
          <p className="text-center text-xs my-1 text-gray-500">
            www.Alexa.com.mm
          </p>
        </div>
      </div>
      <div
        onClick={reactToPrintFn}
        className="my-6 w-fit flex flex-row items-center gap-3 bg-gray-800 text-white px-4 py-2 text-sm cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
          />
        </svg>
        Print Invoice
      </div>
      <div className="flex mt-6 flex-row items-center justify-end gap-3">
        <button onClick={() => setCurrentStage(1)} className="px-9 py-2 disabled:opacity-50 border border-gray-800 ">
          Back
        </button>
        <button onClick={() => setCurrentStage(3)} className="px-9 py-2 disabled:opacity-50 bg-gray-800 text-white">
          Next
        </button>
      </div>
    </div>
  );
};

const InvoiceTr = () => {
  return (
    <tr className="text-sm text-gray-600 border-b">
      <td className="py-3 text-start pe-6">Nike AirForce 1</td>
      <td className="py-3 text-center px-6">XL</td>
      <td className="py-3 text-end px-6">5000 Ks</td>
      <td className="py-3 px-6 text-end">1</td>
      <td className="py-3 ps-6 text-end">5000 Ks</td>
    </tr>
  );
};

export default GenerateInvoice;
