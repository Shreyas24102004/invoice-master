import React from "react";

export default function NotesTerms() {
  return (
    <div className="w-1/2">
      <div>
        <label
          htmlFor="text"
          className="block text-sm font-medium text-gray-700"
        >
          Notes
        </label>
        <div className="mt-3">
          <input
            type="text"
            name="text"
            id="text"
            className="block w-full h-16 rounded-md border-slate-400 border shadow-sm sm:text-sm"
            placeholder="Notes - any relevant information not already covered"
          />
        </div>
      </div>
      <div className="mt-10">
        <label
          htmlFor="text"
          className="block text-sm font-medium text-gray-700"
        >
          Terms
        </label>
        <div className="mt-3">
          <input
            type="text"
            name="text"
            id="text"
            className="block border h-16 w-full rounded-md border-slate-400 shadow-sm sm:text-sm"
            placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
          />
        </div>
      </div>
    </div>
  );
}
