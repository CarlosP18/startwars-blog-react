import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/people.css";
import test from "./../../img/test.jpg";
import { withRouter } from "react-router-dom";

const People = () => {
	const { store, actions } = useContext(Context);
	const [isActive, setActive] = useState(false);
	const handleToggle = () => {
		setActive(!isActive);
	};
	return (
		<>
			<div className="container pt-5">
				<div className="tittle text-center">
					<h1 className="titulo">CHARACTERS</h1>
				</div>
				<div className="row">
					{store.people !== null ? (
						store.people.results.map((character, i) => {
							return (
								<div key={i} className="col-md-3">
									<div className="card bg-transparent mt-5 p-0">
										<img
											src={`https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg`}
											className="mycard-img-top img-fluid"
											alt="..."
										/>
										<div className="card-body text-white justify-content-end">
											<h1 className="card-title"> {character.name} </h1>
											<button
												key={i}
												type="button"
												id=""
												className={
													isActive === false
														? "btn btn-sm btn-outline-warning float-right"
														: "btn btn-sm btn-warning float-right"
												}
												onClick={() => {
													actions.getFavorites(character.name);
													handleToggle();
												}}>
												<i className="far fa-star fa-md  bg-outline-warning" />
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
						{!!store.people && store.people.previous !== null ? (
							<button
								className="btn btn-outline-warning btn-md"
								onClick={() =>
									actions.getPeople(
										store.people.previous.replace(
											"http://swapi.dev/api/people/",
											"http://swapi.dev/api/people/"
										)
									)
								}>
								{" "}
								Previous{" "}
							</button>
						) : (
							<button className="btn btn-outline-secondary btn-md disabled">Previous</button>
						)}
						{!!store.people && store.people.next !== null ? (
							<button
								className="btn btn-outline-warning btn-md"
								onClick={() =>
									actions.getPeople(
										store.people.next.replace(
											"http://swapi.dev/api/people/",
											"https://swapi.dev/api/people/"
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

export default withRouter(People);
