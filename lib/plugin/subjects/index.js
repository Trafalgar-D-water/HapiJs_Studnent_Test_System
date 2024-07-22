const subjectRoutes = require("./routes/addSubject");
const subjectPlugin = {
  name: "Subject",
  version: "1.0.0",
  register: (server, options) => {
    server.route(subjectRoutes);
  },
};
module.exports = subjectPlugin;
