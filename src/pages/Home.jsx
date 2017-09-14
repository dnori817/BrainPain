import "./Home.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component {
	render() {
		return (
			<div className="welcome">
				<h1 className="center">TEST YOUR BRAIN!</h1>
				<div className="center">
					<p>Get 1 point for a correct answer! Lose a point for every wrong answer!</p>
					<p>If you have no clue, press skip to go the next question without penalty</p>
				</div>
				<Link className="center" to={"/Quiz"}>
					<button className="waves-effect waves-light btn center start">
						START THE QUIZ!!!
					</button>
				</Link>
			</div>
		);
	}
}

export default Home;
