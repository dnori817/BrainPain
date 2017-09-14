import "./Navigation.scss";
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import $ from "jquery";

class Navigation extends Component {

	_handleChange = (ev) => {
		this.setState({
			[ev.target.name]: [ev.target.value].toString() });
	}
	render() {
		function refreshPage() {
			window.location.reload();
		}


		const categories = [
			{
			  "id": 9,
			  "name": "General Knowledge",
			},
			{
			  "id": 10,
			  "name": "Books",
			},
			{
			  "id": 11,
			  "name": "Film",
			},
			{
			  "id": 12,
			  "name": "Music",
			},
			{
			  "id": 13,
			  "name": "Musicals & Theatres",
			},
			{
			  "id": 14,
			  "name": "Television",
			},
			{
			  "id": 15,
			  "name": "Video Games",
			},
			{
			  "id": 16,
			  "name": "Board Games",
			},
			{
			  "id": 17,
			  "name": "Science & Nature",
			},
			{
			  "id": 18,
			  "name": "Computers",
			},
			{
			  "id": 19,
			  "name": "Mathematics",
			},
			{
			  "id": 20,
			  "name": "Mythology",
			},
			{
			  "id": 21,
			  "name": "Sports",
			},
			{
			  "id": 22,
			  "name": "Geography",
			},
			{
			  "id": 23,
			  "name": "History",
			},
			{
			  "id": 24,
			  "name": "Politics",
			},
			{
			  "id": 25,
			  "name": "Art",
			},
			{
			  "id": 26,
			  "name": "Celebrities",
			},
			{
			  "id": 27,
			  "name": "Animals",
			},
			{
			  "id": 28,
			  "name": "Vehicles",
			},
			{
			  "id": 29,
			  "name": "Comics",
			},
			{
			  "id": 30,
			  "name": "Science: Gadgets",
			},
			{
			  "id": 31,
			  "name": "Japanese Anime & Manga",
			},
			{
			  "id": 32,
			  "name": "Cartoon & Animations",
			},
		];

		// const links = [{
		// 	to: "/Quiz",
		// 	text: "New Quiz",
		// }, {
		// 	to: "/Scores",
		// 	text: "Score Board",
		// }];
		return (
			<div className="navbar-fixed">
				<ul id="dropdown1"
					className="dropdown-content"
					onChange={this._handleChange}
					name="categories"
				>
					{categories.map((category) => {
						return (
							<div>
								<li className="cats" value={category.id}>{category.name}</li>
								<li className="divider"/>
							</div>

						);
					})}
				</ul>

				<nav className="nav-wrapper">
					<div>
						<h3 className="left title">BrainPain</h3>
					</div>
					<div className="right menu">

						{/* <select defaultValue="9">
							<option value="AL">Alabama</option>


						</select> */}

						<ul className="right">
      				<li>
								<a className="dropdown-button" href="#!" data-activates="dropdown1">
									Category
									<i className="material-icons right">arrow_drop_down</i>
								</a>
							</li>
    				</ul>

						{/* {links.map((link) => {
							return (
								<NavLink
									onClick={ refreshPage }
									key={link.to}
									to={link.to}
								>
									{link.text}
								</NavLink>
							);
						})} */}

					</div>
				</nav>
			</div>

		);
	}
}

export default Navigation;
