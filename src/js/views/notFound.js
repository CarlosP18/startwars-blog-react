import React from "react";
import "../../styles/notFound.css";
import error from "../../img/404(1).png";

function NotFound() {
	return (
		<div className="container-fluid  d-flex  h-100" style={{ "background-color": "white" }}>
			<div className="col-12 d-flex p-5 justify-content-center 404">
				<img className="error" src={error} alt="" />
			</div>
		</div>
	);
}

export default NotFound;
