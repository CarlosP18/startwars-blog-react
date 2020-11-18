import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/people.css";
import test from "./../../img/test.jpg";

const vehicles = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container pt-5">
				<div className="tittle text-center">
					<h1 className="titulo">VEHICLES</h1>
				</div>
				<div className="row">
					{store.vehicles !== null ? (
						store.vehicles.results.map((vehicle, i) => {
							return (
								<div key={i} className="col-md-3">
									<div className="card bg-transparent mt-5 p-0">
										<img src={test} className="mycard-img-top img-fluid" alt="..." />
										<div className="card-body text-white">
											<h1 className="card-title"> {vehicle.name} </h1>
										</div>
										<div className="card-footer text-right">
											<button
												type="button"
												id=""
												className="btn btn-outline-warning btn-sm"
												onClick="">
												<i className="far fa-star bg-outline-warning" />
											</button>
										</div>
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
