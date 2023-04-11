import React from "react";
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css';

import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div>
			<Menu className=" animate-gradient-xy">
				<Link to={"/"}>
					Home
				</Link>
				<Link to={"/logs"}>
					Logs
				</Link>
				<Link to={"/experiments"}>
					Experiments
				</Link>
				{/* <Link to={"/xjzvf"}>
					XJZVF
				</Link> */}
				<Link to={"/community"}>
					Community
				</Link>
				<Link to={"/lifeforms"}>
					Lifeforms
				</Link>
				<Link to={"/login"}>
					Logout
				</Link>
			</Menu>
		</div>
	);
};

export default Sidebar;
