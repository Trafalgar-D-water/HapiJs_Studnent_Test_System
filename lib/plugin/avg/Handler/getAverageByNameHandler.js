const Marks = require("../../marks/schema/markSchema");
const Student = require("../../student/schema/StduentSchema");
const Test = require("../../testss/schema/testSchema");
exports.getAvg = async (request, h) => {
  try {
    const studentID = request.query.name;

    const student = await Student.findById(studentID);
    if (!student) {
      return h.response({ message: "Student not found" }).code(404);
    }

    const allMarks = await Marks.find({ studentID }).exec();
    // console.log(allMarks);

    if (!allMarks.length) {
      return h
        .response({ message: "No marks found for this student" })
        .code(404);
    }

    const testIds = {};
    allMarks.forEach((mark) => {
      testIds[mark.testID.toString()] = true;
    });

    console.log("this is my TestId which i want ", testIds);

    const uniqueTestIds = Object.keys(testIds);
    console.log("this is my uniqueTestIds", uniqueTestIds);
    const tests = await Test.find({ _id: { $in: uniqueTestIds } }).exec();
    console.log("this is my tests", tests);

    const testAverages = allMarks.reduce((acc, mark) => {
      const test = tests.find(
        (t) => t._id.toString() === mark.testID.toString()
      );
      const testName = test ? test.TestName : "Unknown Test";

      if (!acc[testName]) {
        acc[testName] = { total: 0, count: 0 };
      }
      acc[testName].total += mark.obtainMark;
      acc[testName].count += 1;
      return acc;
    }, {});

    const averages = {};
    for (const testName in testAverages) {
      averages[testName] =
        testAverages[testName].total / testAverages[testName].count;
    }

    const response = {
      studentName: student.name,
      averages,
    };

    return h.response(response).code(200);
  } catch (error) {
    console.log(error);
    return h.response({ error: "something went wrong" }).code(500);
  }
};
