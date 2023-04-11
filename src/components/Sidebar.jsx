import React from "react";
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css'

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
	  <div>
		  <Menu className=" animate-gradient-xy">
			  <Link to={"/home"}>
				  Home
			  </Link>
			  <Link to={"/home"}>
				  Home
			  </Link>
		  </Menu>
	</div>
  )
}

export default Sidebar
