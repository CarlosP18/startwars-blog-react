import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/people.scss";

import tittleImg from "../../img/starships.png";
import { Link } from "react-router-dom";
const Starships = () => {
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
					{store.starships !== null ? (
						store.starships.results.map((ship, i) => {
							let char = ship.url.split("/");
							let charId = char[char.length - 2];
							return (
								<div key={i} className="col-md-3">
									<div className="card bg-transparent mt-5 p-0">
										<Link to={"/Starships/" + charId}>
											<img
												src={`https://starwars-visualguide.com/assets/img/starships/${charId}.jpg`}
												className="mycard-img-top img-fluid"
												alt="..."
											/>
										</Link>
										<div className="card-body text-white">
											<h1 className="card-title"> {ship.name} </h1>
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
