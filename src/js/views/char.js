import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/char.css";
import tittleImg from "../../img/characterinfo.png";
import back from "../../img/back.png";

export const Char = () => {
	const { store, actions } = useContext(Context);
	const { char } = store;
	const { id } = useParams();
	console.log(id);
	useEffect(() => {
		actions.getChar(`https://swapi.dev/api/people/${id}/`);
	}, []);
	return (
		<div className="container mt-5">
			<div className="tittle d-flex justify-content-center">
				<img src={tittleImg} alt="" className="img-fluid tittleImg" />
			</div>
			<Link to="/people" type="button" className="btn back-btn btn-sm mt-5">
				<img src={back} className="img-fluid w-auto" alt="" />
			</Link>
			<div className="row pt-3 pb-3">
				<div className="col-md-3">
					<img
						className="iimage img-fluid"
						src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
						alt="Card cap"
					/>
				</div>
				<div
					className="col-md-9 d-flex text-center justify-content-center flex-column"
					style={{ "background-color": "black", opacity: "0.9" }}>
					<h1 className="charName">{char.name}</h1>
					<div className="row  text-light mt-3">
						<div className="col-md-12 d-flex justify-content-between">
							<div className="d-flex flex-column m-2 box col-md-2">
								<span className="box-title"> / Birth Year</span>
								<span className="box-text">/ {char.birth_year}</span>
							</div>
							<div className="d-flex flex-column m-2 box col-md-2">
								<span className="box-title">/ Gender</span>
								<span className="box-text">/ {char.gender}</span>
							</div>
							<div className="d-flex flex-column m-2 box col-md-2">
								<span className="box-title">/ Height</span>
								<span className="box-text">/ {char.height}</span>
							</div>
							<div className="d-flex flex-column m-2 box col-md-2">
								<span className="box-title">/ Skin Color</span>
								<span className="box-text">/ {char.skin_color}</span>
							</div>
							<div className="d-flex flex-column m-2 box col-md-2">
								<span className="box-title">/ Eye Color</span>
								<span className="box-text">/ {char.eye_color}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
