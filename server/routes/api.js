import express from "express";
import BodyParser from "body-parser";
import Score from "../models/score";
import apiRes from "../util/apiRes";
import apiErr from "../util/apiErr";

const router = express.Router();
router.use(BodyParser.json());

// -------------------------------------------

router.post("/scores", (req, res) => {
	// First create the score
	Score.create({
		name: req.body.name,
		score: req.body.score,
	}).catch((err) => {
		apiErr(req, res, {
			code: 500,
			type: "DB_ERROR",
			message: "Unable to submit score",
			error: err,
		});
	});
});



export default router;
