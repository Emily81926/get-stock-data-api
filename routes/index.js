const express = require("express");
const router = express.Router();
const stockDataController = require("../controllers/stockDataController");

router.get("/data", stockDataController.getStockData);

module.exports = router;
