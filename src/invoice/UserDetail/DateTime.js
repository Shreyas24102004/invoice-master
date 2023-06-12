import React from "react";

export default function DateTime() {
  return (
      <table className="text-end mt-20 mr-5 border-spacing-y-3">
        <tbody>
          <tr>
            <td>
              <label
                htmlFor="date"
                className="inline-block text-sm font-medium text-gray-500 mr-2"
              >
                Date
              </label>
            </td>
            <td>
              <div className="inline-block">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="block w-36 rounded text-start text-black placeholder-gray-400 h-7 shadow-sm border-slate-400 focus:border-green-500 border sm:text-sm"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label
                htmlFor="date"
                className="inline-block text-sm font-medium text-gray-500 mr-2"
              >
                Payment Terms
              </label>
            </td>
            <td>
              <div className="inline-block">
                <input
                  type="text"
                  name="date"
                  id="date"
                  className="block w-36 rounded text-start text-black placeholder-gray-400 h-7 shadow-sm border-slate-400 focus:border-green-500 border sm:text-sm"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label
                htmlFor="date"
                className="inline-block text-sm font-medium text-gray-500 mr-2"
              >
                Due Date
              </label>
            </td>
            <td>
              <div className="inline-block">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="block w-36 rounded text-start text-black placeholder-gray-400 h-7 shadow-sm border-slate-400 focus:border-green-500 border sm:text-sm"
                  placeholder="Date"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label
                htmlFor="date"
                className="inline-block text-sm font-medium text-gray-500 mr-2"
              >
                Po Number
              </label>
            </td>
            <td>
              <div className="inline-block">
                <input
                  type="text"
                  name="date"
                  id="date"
                  className="block w-36 rounded text-start text-black placeholder-gray-400 h-7 shadow-sm border-slate-400 focus:border-green-500 border sm:text-sm"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
  );
}
