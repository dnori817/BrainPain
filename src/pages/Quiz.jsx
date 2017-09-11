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



		const answerSelected = (isCorrect) => {
			const { currentQuestion } = this.state;
			const { quiz } = this.props;

			const score = this.state.score + (isCorrect ? 1 : 0);
			this.setState({
				score,
				canProceed: currentQuestion < quiz.length - 1,
			});
		};

		const nextQuestion = () => {
			this.setState({
				currentQuestion: this.state.currentQuestion + 1,
				canProceed: false,
			});
		};
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

								<Question question={quiz[currentQuestion]}/>
								    { canProceed && <a className='next-button' onClick={this.nextQuestion}>Next Question</a> }
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
}


function mapStateToProps(state, props) {
	return {
		quiz: state.quiz.quiz,
		isLoading: state.quiz.isLoading,
		error: state.quiz.error,
	};
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	getQuiz,
}, dispatch);

export default connect(mapStateToProps, { getQuiz }) (Quiz);
