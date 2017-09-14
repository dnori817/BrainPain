import API from "util/api";

export function getQuiz() {
	return (dispatch) => {
		dispatch({ type: "LOADING_QUIZ" });
		API.get("9").then((res) => {
			if (res.results) {
				dispatch({
					type: 'GET_QUIZ',
					quiz: res.results,
				});
			}
			else {
				dispatch({
					type: "QUIZ_LOAD_FAILED",
					error: res.error.message,
				});
			}
		}).catch((error) => {
			dispatch({
				type: "QUIZ_LOAD_FAILED",
				error: "Something Went Wrong!",
			});
		});
	};
}
