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
              className="text-white px-2 inline-block"
              href="https://github.com/setoyuma/GraveNet"
              target={"_blank"}
            >
              Github
            </a>
          </li>
          <h1>|</h1>
          <li >
            <Link to={"/experiments"}><p className="px-2 bg-transparent shadow-lg transition-shadow duration-700 delay-50 ease-in-out hover:shadow-fuchsia-600">Experiments</p></Link>
          </li>
          <h1>|</h1>
          <li >
            <Link to={"/logs"}><p className="px-2 bg-transparent shadow-lg transition-shadow duration-700 delay-50 ease-in-out hover:shadow-fuchsia-600">Logs</p></Link>
          </li>
          <h1>|</h1>
          <li >
            <Link to={"/community"}><p className="px-2 bg-transparent shadow-lg transition-shadow duration-700 delay-50 ease-in-out hover:shadow-fuchsia-600">Community</p></Link>
          </li>
          <h1>|</h1>
          <li >
            <Link to={"/lifeforms"}><p className="px-2 bg-transparent shadow-lg transition-shadow duration-700 delay-50 ease-in-out hover:shadow-fuchsia-600">Lifeforms</p></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
