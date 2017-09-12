import "./Quiz.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getQuiz } from "actions/quiz";
import Loader from "components/Loader.jsx";
import Question from "components/Question.jsx";

import PropTypes from "prop-types";
import { connect } from "react-redux";

class Quiz extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			error: false,
			quiz: [],
			currentQuestion: 0,
			score: 0,
			canProceed: false,
		};
	}
	componentDidMount() {
		this.props.getQuiz();
	}

	render() {
		const { quiz, isLoading, error } = this.props;
		const { currentQuestion, canProceed } = this.state;

		console.log(quiz);

		let content;

		if (isLoading) {
			content = <Loader/>;
		} else if (!quiz) {
			content = <div className="">{error}</div>;
		}
		// else if (currentQuestion >= quiz.length) {
		// 	content = <div className="result">hi</div>;
		// }
		else {
			content = (
				<div>

					<div className="All">

						{quiz.map((results) => {
							return (
								<div className="container">
									{currentQuestion >= quiz.length && this._finalScore()}

									{currentQuestion < quiz.length &&
										<div>
											{this._renderScore()}
											<button
												className='blue-grey lighten-1 btn next-button'
												onClick={this._nextQuestion}
											>
											Skip Question
											</button>
											<Question
												question={quiz[currentQuestion]}
												answerSelected={this._answerSelected.bind(this)}
											/>
										</div>
									}

								</div>
							);
						})}
					</div>
				</div>
			);
		}
		return (
			<div className="All">
				{content}
			</div>
		);
	}
	_renderScore = () => {
		const { quiz } = this.props;
		const { currentQuestion, score } = this.state;

		return (
			<div className='quiz-score blue-grey lighten-1'>
				<p className='count left'>Question {currentQuestion + 1}
					 of {quiz.length}</p>

					 <h4 className="score">Score: {score}</h4>

			</div>
		);
	}

	_finalScore = () => {
		const { quiz } = this.props;
		const { currentQuestion, score } = this.state;

		return (
			<div className='question blue-grey lighten-1'>

				<h1 className="center final-score">FINAL SCORE: {score}</h1>
			</div>
		);
	}

	_answerSelected = (isCorrect) => {
		const { currentQuestion } = this.state;
		const { quiz } = this.props;

		let score;

		if (isCorrect) {
			score = this.state.score + (isCorrect ? 1 : 0);
		} else {
			score = this.state.score + (!isCorrect ? -1 : 0);
		}
		// const score = this.state.score + (isCorrect ? 1 : 0);
		setTimeout(() => {
			this.setState({
				score,
				currentQuestion: this.state.currentQuestion + 1,
			});
		}, 250);
	};

	_nextQuestion = () => {
		this.setState({
			currentQuestion: this.state.currentQuestion + 1,
			canProceed: false,
		});
	};
}

function mapStateToProps(state, props) {
	return { quiz: state.quiz.quiz, isLoading: state.quiz.isLoading, error: state.quiz.error };
}


export default connect(mapStateToProps, { getQuiz })(Quiz);
