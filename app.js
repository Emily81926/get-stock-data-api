require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => res.send("This is a stock data api"));

app.listen(port, () => console.log(`the server is running on port ${port}`));
