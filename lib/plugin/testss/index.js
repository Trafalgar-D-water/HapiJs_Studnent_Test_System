const testRoute = require("./routes/addTest");
const testPlugin = {
  name: "Test",
  version: "1.0.0",
  register: (server, options) => {
    server.route(testRoute);
  },
};
module.exports = testPlugin;
