import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import People from "./views/people";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import NotFound from "./views/notFound";
import Planets from "./views/planets";
import Starships from "./views/starships";
import Vehicles from "./views/vehicles";
import { Char } from "./views/char";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
						<Route exact path="/Char/:id">
							<Char />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/starships">
							<Starships />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
						<Route>
							<NotFound />
						</Route>
					</Switch>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
