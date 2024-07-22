const Subject = require('../schema/subjectSchema')
exports.addSubject = async (request, h) => {
    try{
        const data = request.payload;
        const newSubject =  new Subject(data);
        const savedData = await newSubject.save();
        return h.response(savedData).code(201);
    }catch(error){
        console.log(error);
        return h.response({error:'something went wrong'}).code(500);
    }
};
