import "./Question.scss";
import React from "react";
import PropTypes from "prop-types";
import Sound from 'react-sound';


class Question extends React.Component {
	constructor(props) {
		super(props);

		const { correct_answer, incorrect_answers } = this.props.question;
		const answerList = this.shuffle(incorrect_answers.concat([correct_answer]));

		this.state = {
			hasAnswered: false,
			isCorrect: false,
			answerSelected: '',
			answerList,
		};
	}

	static PropTypes = {
		question: PropTypes.object.isRequired,
		answerSelected: PropTypes.func.isRequired,
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.question !== nextProps.question) {
			const { correct_answer, incorrect_answers } = nextProps.question;
			const answerList = this.shuffle(incorrect_answers.concat([correct_answer]));

			this.setState({ hasAnswered: false, isCorrect: false, answerSelected: '', answerList });
		}
	}

	render() {
		const { question } = this.props.question;

		return (
			<div className='z-depth-4 question'>
				<h4 className="question-text" dangerouslySetInnerHTML={{
					__html: question,
				}}
				/>
				<ul>
					{this.state.answerList.map(this.renderAnswer)}
				</ul>
			</div>
		);
	}

	renderAnswer = (answer) => {
		const { hasAnswered, isCorrect, answerSelected } = this.state;

		if (!hasAnswered) {
			return (
				<li
					className="z-depth-4 answer"
					key={answer}
					onClick={() => this.selectAnswer(answer)}
					dangerouslySetInnerHTML={{
						__html: answer,
					}}
				/>
			);
		}

		let className = 'no-class';
		if (isCorrect && answer === answerSelected) {
			className = 'correct';
			// return (
			// 	<Sound
			// 		url="../assets/sounds/correct.wav"
			// 		playStatus={Sound.status.PLAYING}
			// 		playFromPosition={0}
			// 		onLoading={this.handleSongLoading}
			// 		onPlaying={this.handleSongPlaying}
			// 		onFinishedPlaying={this.handleSongFinishedPlaying}
			// 	/>
			// );
		} else if (!isCorrect && answer === answerSelected) {
			className = 'incorrect';
			// return (
			// 	<Sound
			// 		url="../assets/sounds/error.wav"
			// 		playStatus={Sound.status.PLAYING}
			// 		playFromPosition={0}
			// 		onLoading={this.handleSongLoading}
			// 		onPlaying={this.handleSongPlaying}
			// 		onFinishedPlaying={this.handleSongFinishedPlaying}
			// 	/>
			// );
		}

		return (
			<li
				key={answer}
				className={className}
				dangerouslySetInnerHTML={{
					__html: answer,
				}}
			/>
		);
	}

	selectAnswer = (selected) => {
		let isCorrect = true;
		if (selected === this.props.question.correct_answer) {
			this.setState({ hasAnswered: true, isCorrect: true, answerSelected: selected });
		} else {
			isCorrect = false;
			this.setState({ hasAnswered: true, isCorrect: false, answerSelected: selected });
		}

		this.props.answerSelected(isCorrect);
	}

	// Fisher-Yates shuffle algorithm
	shuffle = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}
}

export default Question;
