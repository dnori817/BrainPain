import "./Quiz.scss";
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
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

								{ !isLoading && this._renderScore() }
	                { quiz.length > 0 &&
										<div>
											<button className='waves-effect waves-dark  blue-grey lighten-1 btn next-button' onClick={this._nextQuestion}>Next Question</button>
	                    <Question question={quiz[currentQuestion]} 		answerSelected={this._answerSelected.bind(this)}

											 />
										</div>
										}
								{/* <h5 className="center" dangerouslySetInnerHTML={{
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
								</div> */}




							</div>
						);
					}
					)}
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
	_renderScore = () => {
		const { quiz } = this.props;
		const { currentQuestion, score } = this.state;

		return (
		    <div className='quiz-score blue-grey lighten-1'>
		        <p className='count left'>Question {currentQuestion + 1} of {quiz.length}</p>
						<h3>Score: { score }</h3>
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
		this.setState({
			score,

		});
	};

	_nextQuestion = () => {
		this.setState({
			currentQuestion: this.state.currentQuestion + 1,
			canProceed: false,
		});
	};
}


function mapStateToProps(state, props) {
	return {
		quiz: state.quiz.quiz,
		isLoading: state.quiz.isLoading,
		error: state.quiz.error,
	};
}

// const mapDispatchToProps = (dispatch) => bindActionCreators({
// 	getQuiz,
// }, dispatch);

export default connect(mapStateToProps, { getQuiz }) (Quiz);
