import React from "react";
import "../../styles/home.scss";
import death from "../../img/death.png";
import xwing from "../../img/xwing.png";

export const Home = () => (
	<>
		<div className="container-fluid ">
			<div className="row d-flex justify-content-end">
				<img className="img-fluid death" src={death} />
			</div>
			<div className="w-50">
				<img className="img-fluid w-50" src={xwing} />
			</div>
		</div>
	</>
);
