import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/people.scss";
import logo from "../../img/logo.png";

export const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		let nav = "#mainNavbar";
		if (window.scrollY > 55) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeBackground);

	return (
		<nav
			className={
				navbar
					? "navbar scrolled navbar-expand-lg fixed-top navbar-dark navbar-custom p-0"
					: "navbar navbar-expand-lg fixed-top navbar-dark navbar-custom p-0"
			}
			id="mainNavbar">
			<Link className="navbar-brand ml-lg-5 ml-3" to="/">
				<img src={logo} height="45" alt="" loading="lazy" />
			</Link>
			<button
				className="navbar-toggler mr-3"
				data-toggle="collapse"
				data-target="#navLinks"
				aria-label="Toggle Navbar">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse justify-content-end mr-5" id="navLinks" data-toggle="collapse">
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
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdownMenuLink"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Favorites
						</a>
						<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
							<li>
								<a className="dropdown-item" href="#">
									Action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
};
