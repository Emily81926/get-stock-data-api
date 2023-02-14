const express = require('express')
const router = express.Router()
const stockDataController = require("../controllers/stockDataController");

router.get("/", stockDataController.getStockData);


module.exports = router