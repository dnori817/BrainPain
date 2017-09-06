const INITIAL_STATE = {
	quiz: [],
	// selectedProduct: null,
	error: null,
	isLoading: false,
};

function quizReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "LOADING_QUIZ":
		return {
			...state,
			isLoading: true,
			quiz: [],
		};
	case "GET_QUIZ":
		return {
			...state,
			isLoading: false,
			quiz: action.quiz,
		};

	// Error Cases
	case "QUIZ_LOAD_FAILED":
		return {
			...state,
			isLoading: false,
			error: action.error,
		};
	default:
		return state;
	}
}

export default quizReducer;
