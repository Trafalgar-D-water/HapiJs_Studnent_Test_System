const Student = require("../schema/StduentSchema");
exports.addStduent = async (request , h) => {
  try {
    const data = request.payload;
    console.log(data)
    const newStudent = new Student(data);
    console.log(newStudent)
    const savedData = await newStudent.save();
    return h.response(savedData).code(201);
  } catch (error) {
    console.log(error);
    return h.response({ "somthing went wrong": error }).code(500);
  }
};
