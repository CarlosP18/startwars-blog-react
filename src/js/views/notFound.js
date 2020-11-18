import React from "react";
import "../../styles/notFound.css";
import error from "../../img/404.png";

function NotFound() {
	return (
		<div className="row">
			<div className="col-12  404">
				<img className="error" src={error} alt="" />
			</div>
		</div>
	);
}

export default NotFound;
