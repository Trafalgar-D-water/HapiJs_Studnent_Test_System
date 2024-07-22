const addStduentHAndler = require("../handler/addStudentHandler");
module.exports = {
  method: "POST",
  path: "/api/student",
  handler: addStduentHAndler.addStduent,
};
