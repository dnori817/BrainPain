import Sequelize from "sequelize";
import sequelize from "../util/sequelize";

const Score = sequelize.define("finalScore", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: Sequelize.STRING(3),
		notNull: true,
	},
	score: {
		type: Sequelize.INTEGER,
		notNull: true,
	},
});


export default Score;
