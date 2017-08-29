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
			<div>
				<nav>
					<h3>BrainPain</h3>
					<div>

						{links.map((link) => {
							return (
								<NavLink
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
