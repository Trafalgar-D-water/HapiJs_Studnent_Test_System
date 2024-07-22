const addMarks = require('../schema/markSchema')
exports.addMArks =async (request, h) => {
  try {
    const data = request.payload;
    const newMArks = new addMarks(data);
    const savedMarks = await newMArks.save();

    return h.response(savedMarks).code(201);
  } catch (error) {
    console.log(error);
    return h.response({ error: "something went wrong" }).code(500);
  }
};
