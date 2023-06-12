import React from "react";
import DateTime from "./DateTime";

export default function InvoiceNo() {
  return (
    <>
      <div className="mt-2">
        <table className="text-end ml-12">
          <thead>
            <tr>
              <td colSpan={2}>
                <h1 className="text-5xl text-end">INVOICE</h1>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className="mt-1 flex rounded shadow-sm">
                  <span
                    aria-disabled
                    className="inline-flex items-center rounded-l-md  border border-slate-400 bg-gray-300 px-3 text-gray-500 sm:text-sm"
                  >
                    #
                  </span>
                  <input
                    type="text"
                    name="invoice_no"
                    id="invoice_no"
                    className="block w-36 flex-1 text-end rounded-none rounded-r-md border border-slate-400 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={"1"}
                  />
                </div>
              </td>
            </tr>
          </thead>
        </table>
        <DateTime />
      </div>
    </>
  );
}
