import "./Quiz.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getQuiz } from "actions/quiz";
import Loader from "components/Loader.jsx";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class Quiz extends Component {
	componentDidMount() {
		this.props.getQuiz();
	}
	render() {
		const { quiz, isLoading, error } = this.props;
		console.log(quiz);
		let content;

		if (isLoading) {
			content = <Loader/>;
		}
		else if (!quiz) {
			content = <div className="">{ error }</div>;
		}
		else { content = (
			<div>
				<div className="All">
					{quiz.map((results) => {
						return (

							<div className="container">

								<h1 className="center" dangerouslySetInnerHTML={{
									__html: results.question,
								}}
								/>
								<div className="center">
									<button className="waves-effect waves-light btn true">
										{results.correct_answer}
									</button>
									<button className="waves-effect waves-light btn false">
										{results.incorrect_answers[0]}
									</button>
								</div>




							</div>
						);
					})}
				</div>
			</div>
		);
		}
		return (
			<div className="All">
				{ content }
			</div>
		);
	}
}


function mapStateToProps(state, props) {
	return {
		quiz: state.quiz.quiz,
		isLoading: state.quiz.isLoading,
		error: state.quiz.error,
	};
}

export default connect(mapStateToProps, { getQuiz }) (Quiz);
