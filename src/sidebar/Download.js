import React from "react";
import { BsDownload } from "react-icons/bs";

export default function Download() {
  return (
    <>
      <div>
        <button
          type="button"
          className=" items-center rounded border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-400 focus:outline-none focus:ring-offset-2"
        >
          <BsDownload className="inline-block"/>    Download Invoice
        </button>
      </div>
    </>
  );
}
