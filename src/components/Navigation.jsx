import "./Navigation.scss";
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navigation extends Component {
	render() {
		const links = [{
			to: "/",
			text: "Home",
		}, {
			to: "/Quiz",
			text: "New Quiz",
		}, {
			to: "/Scores",
			text: "Score Board",
		}];
		return (
			<div className="navbar-fixed">
				<nav className="nav-wrapper">
					<div>
						<h3 className="left title">BrainPain</h3>
						{/* <img src="src/assets/images/human-brain-icon-48.png"/> */}
					</div>
					<div className="right">

						{links.map((link) => {
							return (
								<NavLink
									key={link.to}
									to={link.to}
								>
									{" | " + link.text}
								</NavLink>
							);
						})}

					</div>
				</nav>
			</div>

		);
	}
}

export default Navigation;
