import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className=" px-4 py-4 mb-12 flex justify-between shadow-lg hover:shadow-gray-500 transition-shadow ease-in-out delay-50 duration-700 bg-black text-white">
        <Link to={"/"} className=" text-2xl">Gravenet</Link>
        <ul className="flex items-center">
          <li>
            <a
              className=" transition-opacity delay-50 bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-x text-white px-4 py-2 rounded-md ml-8"
              href="https://github.com/setoyuma/GraveNet"
              target={"_blank"}
            >
              Github
            </a>
            <Link className=" transition-opacity delay-50 bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-x text-white px-4 py-2 rounded-md ml-8" to={"/logs"}>Logs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
