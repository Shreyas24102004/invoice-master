import React from "react";
import UserDetail from "./UserDetail/UserDetail";
import AddItem from "./Item/AddItem"
import Note from "./Notes/Note";

export default function Invoice() {
  return (
    <div className=" border border-slate-600 w-full bg-white">
      <div className="mx-5">
        <UserDetail />
        {/* <Item /> */}
        <AddItem/>
        <Note/>
      </div>
    </div>
  );
}
