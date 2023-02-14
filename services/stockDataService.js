const axios = require("axios");

const stockDataService = {
  //取得Data
  getData: async (req, res, callback) => {
    const result = await axios.get(
      //保護該API不被使用
      process.env.DATAAPI
    );

    return callback({ result: result.data });
  },
};

module.exports = stockDataService;
