let mongoose = require("mongoose");

const mongodb_url =
	"mongodb+srv://lamhan3012:Lamhoangan3012cmvn@book.gxvp8.gcp.mongodb.net/book?retryWrites=true&w=majority";

class Database {
	constructor() {
		this._connect();
	}

	_connect() {
		mongoose
			.connect(mongodb_url, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => {
				console.log("Database connection successfully!");
			})
			.catch((err) => {
				console.log("Database connection error!");
			});
	}
}

module.exports = new Database();
