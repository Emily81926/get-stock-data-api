const stockDataService = require("../services/stockDataService");

const stockDataController = {
  getStockData: async (req, res) => {
    try {
      await stockDataService.getData(req, res, (data) => {
        return res.status(200).json({ result: data.result });
      });
    } catch (error) {
      return res.status(500).json("cannot fetch the data");
    }
  },
};

module.exports = stockDataController;
