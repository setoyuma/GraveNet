import React from "react";

const Entry = ({ children, title } ) => {
  return (
    <div className="mx-auto flex max-w-screen-sm items-center justify-center">
      <div className=" w-full rounded-md  bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-xy p-1">
        <div className="text-white text-2xl">{`${title}`}</div>
        <div class="flex h-full w-full items-center justify-center px-60 bg-black">
          <h1 class="text-2xl font-black text-white p-4">{ children }</h1>
        </div>
        <ul className="flex gap-3">
          <li className=" h-4 text-sm text-white">
            <h3>&rarr;@seto</h3> 
          </li>
          <li className=" h-4 text-sm text-white">
            <h3>Posted : 4/11 11:51AM</h3>
          </li>
          <li className=" h-4 text-sm text-white">
            <h3>Gravenet</h3>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Entry;
