import "./Navigation.scss";
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navigation extends Component {
	render() {
		function refreshPage() {
			window.location.reload();
		}
		const links = [{
				to: "/Quiz",
			text: "New Quiz",
		// }, {
		// 	to: "/Scores",
		// 	text: "Score Board",
		}];
		return (
			<div className="navbar-fixed">
				<nav className="nav-wrapper">
					<div>
						<h3 className="left title">BrainPain</h3>
					</div>
					<div className="right menu">

						{links.map((link) => {
							return (
								<NavLink
									onClick={ refreshPage }
									key={link.to}
									to={link.to}
								>
									{link.text}
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
