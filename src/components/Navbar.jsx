import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className=" px-4 py-4 mb-12 flex justify-between shadow-lg hover:shadow-gray-500 transition-shadow ease-in-out delay-50 duration-700 bg-black text-white">
        <h1 className=" text-2xl">Gravenet</h1>
        <ul className="flex items-center">
          <li>
            <a
              className=" transition-opacity delay-50 bg-gradient-to-t from-fuchsia-400 to-gray-800-500 animate-gradient-y text-white px-4 py-2 rounded-md ml-8"
              href="https://github.com/setoyuma/GraveNet"
              target={"_blank"}
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
