import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top navbar-dark navbar-custom mt-3 p-0 ">
			<Link className="navbar-brand ml-5" to="/">
				<img src={logo} height="45" alt="" loading="lazy" />
			</Link>
			<div className="collapse navbar-collapse justify-content-end mr-5" data-toggle="collapse" id="navbarNav">
				<ul className="navbar-nav text-white">
					<li className="nav-item">
						<Link className="nav-link" to="/people">
							People
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/starships">
							Starships
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="vehicles">
							Vehicles
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link " to="planets" tabIndex="-1" aria-disabled="true">
							Planets
						</Link>
					</li>
					<li className="nav-item dropdown">
						<Link
							className="nav-link dropdown-toggle"
							to="#"
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
