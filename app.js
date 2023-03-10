require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const routes = require('./routes/index')

app.use(routes);

app.listen(port, () => console.log(`the server is running on port ${port}`));
