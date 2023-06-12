import React, { useRef } from "react";

export default function ContactDetail() {
  const fileInputRef = useRef(null);

  const handleLogoUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="my-3 mx-3 d-inline">
      <div>
        <input type="file" ref={fileInputRef} style={{ display: "none" }} />
        <button
          type="button"
          onClick={handleLogoUpload}
          className="bg-gray-200 h-32 w-44 inline-flex items-center rounded border border-slate-400 px-6 py-3 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          + Add Your Logo
        </button>
      </div>
      <div className="mt-4">
        <input
          type="text"
          name="who_from"
          id="who_from"
          className="block w-60 rounded text-start text-black h-12 shadow-sm border-slate-400 focus:border-green-500 border sm:text-sm"
          placeholder="Who is this invoice from? (required)"
        />
      </div>
      <div className="ml-2">
        <div className="mt-4 inline-block">
          <label
            htmlFor="bill"
            className="block ml-2 text-sm font-medium text-gray-500"
          >
            Bill To
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="Bill"
              id="Bill"
              className="block w-52 rounded text-start text-black h-12 shadow-sm border-slate-400 focus:border-green-500 border sm:text-sm"
              placeholder="Who is this invoice to? (required)"
            />
          </div>
        </div>
        <div className="mt-4 inline-block ml-4">
          <label
            htmlFor="bill"
            className="block ml-2 text-sm font-medium text-gray-500"
          >
            Ship To
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="Ship"
              id="Ship"
              className="block w-52 rounded text-start text-black h-12 shadow-sm border-slate-400 border sm:text-sm"
              placeholder="(Optional)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
