const { addTest } = require("../handler/addTestHandler");

module.exports = {
  method: "POST",
  path: "/api/test",
  handler: addTest,
};
