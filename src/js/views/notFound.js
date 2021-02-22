import React from "react";
import "../../styles/notFound.css";
import error from "../../img/404(1).png";

function NotFound() {
	return (
		<div
			className="container-fluid h-100  d-flex justify-content-center   "
			style={{ "background-color": "white" }}>
			<img className="error mt-0 h-25 pb-5" src={error} alt="" />
		</div>
	);
}

export default NotFound;
