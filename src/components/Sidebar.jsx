import React from "react";
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css'

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
	  <div>
		  <Menu className=" animate-gradient-xy">
			  <Link to={"/"}>
				  Home
			  </Link>
			  <Link to={"/"}>
				  Home
			  </Link>
		  </Menu>
	</div>
  )
}

export default Sidebar
