const { getAvg } = require("../Handler/getAverageByNameHandler");

module.exports = {
  method: "GET",
  path: "/api/name",
  handler:getAvg,
};
