const express = require('express');

const app = express();

app.listen("4000", (req, res, next) => {
	console.log("Listening to localhost port 4000...");
})