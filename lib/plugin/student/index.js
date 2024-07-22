const StduentRoute = require("./routes/addStudent");
const StudentPlugin = {
  name: "student",
  version: "1.0.0",
  register: (server, options) => {
    server.route(StduentRoute);
  },
};
module.exports = StudentPlugin;
