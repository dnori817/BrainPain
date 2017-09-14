import { combineReducers } from "redux";
import quiz from "./quiz";
import scoreBoard from "./scoreBoard";

export default combineReducers({
	quiz,
	scoreBoard,
});
