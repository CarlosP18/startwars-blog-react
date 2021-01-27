import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/people.css";
import test from "./../../img/test.jpg";
import tittleImg from "../../img/starships.png";
const Starships = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container pt-5">
				<div className="tittle d-flex justify-content-center">
					<img src={tittleImg} alt="" className="img-fluid tittleImg" />
				</div>
				<div className="row">
					{store.starships !== null ? (
						store.starships.results.map((ship, i) => {
							let char = ship.url.split("/");
							let charId = char[char.length - 2];
							return (
								<div key={i} className="col-md-3">
									<div className="card bg-transparent mt-5 p-0">
										<img
											src={`https://starwars-visualguide.com/assets/img/starships/${charId}.jpg`}
											className="mycard-img-top img-fluid"
											alt="..."
										/>
										<div className="card-body text-white">
											<h1 className="card-title"> {ship.name} </h1>
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
						{!!store.starships && store.starships.previous !== null ? (
							<button
								className="btn btn-outline-warning btn-md"
								onClick={() =>
									actions.getStarships(
										store.starships.previous.replace(
											"http://swapi.dev/api/starships/",
											"http://swapi.dev/api/starships/"
										)
									)
								}>
								{" "}
								Previous{" "}
							</button>
						) : (
							<button className="btn btn-outline-secondary btn-md disabled">Previous</button>
						)}
						{!!store.starships && store.starships.next !== null ? (
							<button
								className="btn btn-outline-warning btn-md"
								onClick={() =>
									actions.getStarships(
										store.starships.next.replace(
											"http://swapi.dev/api/starships/",
											"https://swapi.dev/api/starships/"
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

export default Starships;
