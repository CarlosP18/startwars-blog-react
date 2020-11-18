import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/people.css";
import test from "./../../img/test.jpg";

const Planets = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container pt-5">
				<div className="tittle text-center">
					<h1 className="titulo">PLANETS</h1>
				</div>
				<div className="row">
					{store.planets !== null ? (
						store.planets.results.map((planet, i) => {
							return (
								<div key={i} className="col-md-3">
									<div className="card bg-transparent mt-5 p-0">
										<img src={test} className="mycard-img-top img-fluid" alt="..." />
										<div className="card-body text-white">
											<h1 className="card-title"> {planet.name} </h1>
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
