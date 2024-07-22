const { addMArks } = require("../handler/addMArksHAndler");

module.exports = {
  method: "POST",
  path: "/api/marks",
  handler: addMArks,
};
