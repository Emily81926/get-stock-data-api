const stockDataController = {
  getStockData: async (req, res) => {
    try {
      return res.status(200).send("This is a stock api server");
    } catch (error) {
      return res.status(400)
    }
  },
};

module.exports = stockDataController;
