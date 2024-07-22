const AvgRoute = require("./routes/getAvgByName");
const AvgPlugin = {
  name: "Avg",
  version: "1.0.0",
  register: (server, options) => {
    server.route(AvgRoute);
  },
};
module.exports = AvgPlugin;
