import "./Quiz.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getQuiz } from "actions/quiz";
import Loader from "components/Loader.jsx";
import Question from "components/Question.jsx";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";

// http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/

const TimerExample = React.createClass({

	getInitialState: function(){
	    // This is called before our render function. The object that is
	    // returned is assigned to this.state, so we can use it later.
	    return { elapsed: 0 };
	},

	componentDidMount: function(){

	    // componentDidMount is called by react when the component
	    // has been rendered on the page. We can set the interval here:

	    this.timer = setInterval(this.tick, 50);
	},

	componentWillUnmount: function(){

	    // This method is called immediately before the component is removed
	    // from the page and destroyed. We can clear the interval here:

	    clearInterval(this.timer);
	},

	tick: function(){

	    // This function is called every 50 ms. It updates the
	    // elapsed counter. Calling setState causes the component to be re-rendered

	    this.setState({elapsed: new Date() - this.props.start});
	},

	render: function() {

	    // Calculate elapsed to tenth of a second:
	    const elapsed = Math.round(this.state.elapsed / 100);

	    // This will give a number with one digit after the decimal dot (xx.x):
	    const seconds = (elapsed / 10).toFixed(1);

	    // Although we return an entire <p> element, react will smartly update
	    // only the changed parts, which contain the seconds variable.

	    return <p><b>{seconds}</b></p>;
	}
	});

ReactDOM.render(
	<TimerExample start={Date.now()} />,
	document.getElementById('timer')
);


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

						<div className="container">
							{currentQuestion >= quiz.length && this._finalScore()}

							{currentQuestion < quiz.length &&
								<div>
									<div id="timer"/>
									{this._renderScore()}
									<button
										className='waves-effect waves-light blue-grey lighten-1 btn next-button'
										onClick={this._nextQuestion}
									>
									Skip Question
									</button>

									<p className='count left'>Question {currentQuestion + 1 + " "}
										of {quiz.length}</p>
									<Question
										question={quiz[currentQuestion]}
										answerSelected={this._answerSelected.bind(this)}
									/>
								</div>
							}

						</div>
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
			<div className='quiz-score'>

					 <h4 className="score">Score: {score}</h4>

			</div>
		);
	}

	_finalScore = () => {
		const { quiz } = this.props;
		const { currentQuestion, score } = this.state;

		function refreshPage() {
			window.location.reload();
		}

		return (
			<div className="z-depth-4 center question blue-grey lighten-1">

				<h1 className="center final-score">FINAL SCORE: {score}</h1>
				<Link to={"/Quiz"}>
					<button onClick={ refreshPage } className="wave s-effect waves-light btn center retry">
						Try Again!
					</button>
				</Link>
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
		}, 500);
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
