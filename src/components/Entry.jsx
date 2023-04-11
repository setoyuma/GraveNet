import React from "react";

const Entry = ({ children } ) => {
  return (
    <div className="mx-auto flex max-w-screen-sm items-center justify-center">
      <div className=" w-full rounded-md  bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-xy p-1">
        <div class="flex h-full w-full items-center justify-center bg-black">
          <h1 class="text-2xl font-black text-white p-4">{ children }</h1>
        </div>
        <ul className="flex gap-3">
          <li className=" h-4 text-sm">
            <h3>Author</h3> 
          </li>
          <li className=" h-4 text-sm">
            <h3>Footer</h3>
          </li>
          <li className=" h-4 text-sm">
            <h3>Info</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Entry;
