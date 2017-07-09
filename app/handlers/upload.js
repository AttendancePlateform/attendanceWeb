const uploadGateway = require('../gateway/upload');
const path = require('path');
const csv=require('csvtojson');

exports.upload = (req, res) => {
    let students = [];
    let sampleFile = req.files.student;
    sampleFile.mv(sampleFile.name, function(err) {
        if (err) return res.status(500).send(err);
    });

    csv({noheader:false})
        .fromFile(path.resolve(sampleFile.name))
        .on('json',(jsonObj)=>{
            students.push(jsonObj)
        })
        .on('done',(error)=>{
            if (error) return res.status(500).send(error);
            uploadGateway.upload(students).then((result) =>{
                res.end(result)
            }).catch((err) => {
                res.status(500).send(err);
            })
        });
};
