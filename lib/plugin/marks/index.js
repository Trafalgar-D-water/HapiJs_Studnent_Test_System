const MarksRoute = require("./routes/addMarks");
const MarksPlugin = {
  name: "marks",
  version: "1.0.0",
  register: (server, options) => {
    server.route(MarksRoute);
  },
};
module.exports = MarksPlugin;
