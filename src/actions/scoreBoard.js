import API from "util/api";

export function submitScore(score, player) {
	return (dispatch, getStore) => {

		const { scores } = getStore().scores;
		const scoreIds  =	scores.map(function(score) {
			return score.id;
		});
		dispatch({
			type: "SUBMIT_SCORE_START",
		});
		API.post('/scores', {
			args: {
				name: score.name,
				score: score.score,
			},
		})
			.then((res) => {
				if (res.data) {
					dispatch({
						type: "SUBMIT_SCORE_SUCCESS",
						data: res.data,
						score,
					});
				}
				else {
					dispatch({
						type: "SUBMIT_SCORE_FAILURE",
						error: res.error.message,
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: "SUBMIT_SCORE_FAILURE",
					error: "Something went wrong",
				});
			});
	};
}
