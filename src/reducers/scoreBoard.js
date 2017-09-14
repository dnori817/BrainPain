const INITIAL_STATE = {
	scores: {},
	scoreSuccess: false,
	scoreFailure: false,
	error: null,

};

function scoreboardReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "SUBMIT_SCORE_SUCCESS":
		return {
			...state,
			scores: action.scores,
			scoreSuccess: true,
			scoreFailure: false,
		};
	// Error Cases
	case "SUBMIT_SCORE_FAILURE":
		return {
			...state,
			error: action.error,
			scoreSuccess: false,
			scoreFailure: true,
		};

	default:
		return state;
	}
}


export default scoreboardReducer;
