const HospitalForm = require("../models/hospitalForm");
const Hospital = require("../models/hospital");
const { validationResult } = require("express-validator");

exports.getHospitalById = async (req, res, next, id) => {
    await Hospital.findById(id).exec((err, hospital) => {
        if (!hospital || err) {
            return res.status(400).json({
                error: "No user was found in DB"
            })
        }
        req.profile = hospital;
        // res.json(req.profile);
        next();
    })
}

exports.fillData = (req, res) => {
    const errors = validationResult(req);    
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg,
        });
    }
    const hospitalForm = new HospitalForm(req.body);
    console.log(req.body);
    hospitalForm.save((err, hospitalForm) => {
        if (err) {
            return res.status(400).json({
                err: "Not able to save user in DB"
            });
        }
        res.json({
            hospitalForm
        });
    });
}