const request = require('request');
const ATTENDANCE_UPLOAD = 'http:localhost:4000/upload/student';
exports.upload = (students) =>{
    return new Promise((fulfil,reject) =>{
        request.post(ATTENDANCE_UPLOAD, {form:students},(err, httpResponse, body) =>{
            if(err) return reject(err);
            return fulfil(body)
        })
    })
};