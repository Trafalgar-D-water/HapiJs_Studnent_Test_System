const { addSubject } = require("../handler/addSubjectHAndler");

module.exports = {
  method: "POST",
  path: "/api/subject",
  handler: addSubject,
};
