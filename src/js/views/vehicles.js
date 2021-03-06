import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/people.scss";
import test from "./../../img/test.jpg";
import tittleImg from "../../img/vehicles.png";
import { Link } from "react-router-dom";
const vehicles = () => {
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
					{store.vehicles !== null ? (
						store.vehicles.results.map((vehicle, i) => {
							let char = vehicle.url.split("/");
							let charId = char[char.length - 2];
							return (
								<div key={i} className="col-md-3">
									<div className="card bg-transparent mt-5 p-0">
										<Link to={"/Vehicles/" + charId}>
											<img
												src={`https://starwars-visualguide.com/assets/img/vehicles/${charId}.jpg`}
												className="mycard-img-top img-fluid"
												alt="..."
											/>
										</Link>
										<div className="card-body text-white">
											<h1 className="card-title"> {vehicle.name} </h1>
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
				<div className="row my-5">
					<div className="col-md-12 d-flex justify-content-between">
						{!!store.vehicles && store.vehicles.previous !== null ? (
							<button
								className="btn btn-outline-warning btn-md"
								onClick={() =>
									actions.getVehicles(
										store.vehicles.previous.replace(
											"http://swapi.dev/api/vehicles/",
											"http://swapi.dev/api/vehicles/"
										)
									)
								}>
								{" "}
								Previous{" "}
							</button>
						) : (
							<button className="btn btn-outline-secondary btn-md disabled">Previous</button>
						)}
						{!!store.vehicles && store.vehicles.next !== null ? (
							<button
								className="btn btn-outline-warning btn-md"
								onClick={() =>
									actions.getVehicles(
										store.vehicles.next.replace(
											"http://swapi.dev/api/vehicles/",
											"https://swapi.dev/api/vehicles/"
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

export default vehicles;
