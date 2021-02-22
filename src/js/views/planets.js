import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/people.scss";
import test from "./../../img/test.jpg";
import tittleImg from "../../img/planets.png";
import { Link } from "react-router-dom";

const Planets = () => {
	const { store, actions } = useContext(Context);
	const [isActive, setActive] = useState(false);
	const handleToggle = () => {
		setActive(!isActive);
	};
	return (
		<>
			<div className="container pt-5">
				<div className="tittle d-flex justify-content-center">
					<img src={tittleImg} alt="" className="img-fluid tittleImg" />
				</div>
				<div className="row">
					{store.planets !== null ? (
						store.planets.results.map((planet, i) => {
							let char = planet.url.split("/");
							let charId = char[char.length - 2];
							return (
								<div key={i} className="col-md-3">
									<div className="card bg-transparent mt-5 p-0">
										<Link to={"/Planets/" + charId}>
											<img
												src={`https://starwars-visualguide.com/assets/img/planets/${charId}.jpg`}
												className="mycard-img-top img-fluid"
												alt="..."
											/>
										</Link>
										<div className="card-body text-white">
											<h1 className="card-title"> {planet.name} </h1>
											<button
												key={i}
												type="button"
												id=""
												className={
													isActive === false
														? "btn btn-sm notFavorite float-right"
														: "btn btn-sm notFavorite float-right"
												}
												onClick={() => {
													actions.getFavorites(character.name);
													handleToggle();
												}}>
												<i className="far fa-star fa-md" />
											</button>
										</div>
										{/* <div className="card-footer text-right ">
											<button
												key={i}
												type="button"
												id=""
												className={
													isActive === false
														? "btn btn-sm btn-outline-warning"
														: "btn btn-sm btn-warning"
												}
												onClick={() => {
													actions.getFavorites(character.name);
													handleToggle();
												}}>
												<i className="far fa-star fa-md  bg-outline-warning" />
											</button>
										</div> */}
									</div>
								</div>
							);
						})
					) : (
						<div className="container pt-5">
							<div className="row">
								<div className="col-12 text-center w-25">
									<div className="loading">
										<h1 className="text-white  pt-4"> Loading... </h1>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
				<div className="row my-5 ">
					<div className="col-md-12 d-flex justify-content-between">
						{!!store.planets && store.planets.previous !== null ? (
							<button
								className="btn btn-outline-warning btn-md"
								onClick={() =>
									actions.getPlanets(
										store.planets.previous.replace(
											"http://swapi.dev/api/planets/",
											"http://swapi.dev/api/planets/"
										)
									)
								}>
								{" "}
								Previous{" "}
							</button>
						) : (
							<button className="btn btn-outline-secondary btn-md disabled">Previous</button>
						)}
						{!!store.planets && store.planets.next !== null ? (
							<button
								className="btn btn-outline-warning btn-md"
								onClick={() =>
									actions.getPlanets(
										store.planets.next.replace(
											"http://swapi.dev/api/planets/",
											"https://swapi.dev/api/planets/"
										)
									)
								}>
								{" "}
								Next{" "}
							</button>
						) : (
							<button className="btn btn-outline-secondary btn-md disabled">next</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Planets;
