import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function AddItem() {
  const [List, setList] = useState();
  const [AddList, setAddList] = useState();

  const handelListItem = () => {
    setAddList(List);
    console.log(AddList);
  };

  return (
    <>
      <div className="mx-3 mt-5">
        <table className="w-full">
          <thead>
            <tr className="text-start w-full bg-black text-white h-6">
              <td className="w-4/6 pl-2 border rounded">Item</td>
              <td className="border rounded">Quantity</td>
              <td className="border rounded">Rate</td>
              <td className="border rounded">Amount</td>
            </tr>
          </thead>
          <tbody value={List}>
            <tr>
              <td>
                <input
                  type="text"
                  name="Ship"
                  id="Ship"
                  className="block w-full rounded text-start text-black h-8 shadow-sm border-slate-400 border sm:text-sm"
                  placeholder="Description of service or product..."
                />
              </td>
              <td className=" w-20">
                <input
                  type="text"
                  name="Ship"
                  id="Ship"
                  className="block rounded text-start text-black h-8 shadow-sm border-slate-400 border sm:text-sm"
                  placeholder="1"
                />
              </td>
              <td className=" w-24">
                <div className="relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="company-website"
                    id="company-website"
                    className="block w-full rounded-md h-8 border-slate-400 border sm:pl-14 sm:text-sm"
                    placeholder="0.00"
                  />
                </div>
              </td>
              <td>
                <p className=" inline-block">$</p>
                <p className=" inline-block">0.00</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-3 mt-1">
        <button
          type="button"
          value={AddList}
          className="inline-flex items-center rounded border border-transparent bg-green-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-green-400 focus:outline-none focus:ring-offset-2"
          onClick={handelListItem}
        >
          <p>
            <AiOutlinePlus className=" inline-block" /> Line Item
          </p>
        </button>
      </div>
    </>
  );
}
