const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("hi");
});

app.listen(port, () => {
	console.log("listening on port" + port);
});
