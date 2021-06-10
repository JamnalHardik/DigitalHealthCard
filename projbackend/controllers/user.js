const HospitalForm = require("../models/hospitalForm");
const User = require("../models/user");
const Hospital = require("../models/hospital")
const { validationResult } = require("express-validator");

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                message: "Could not find user"
            })
        }
        req.profile = user;
        next();
    })
}

exports.getUser = (req, res) => {
    req.profile.encryptedPassword = undefined;
    req.profile.salt = undefined;
    console.log(req.profile);    
    res.json(req.profile);
}

exports.getAllUserForms = async (req, res) => {
    id = req.profile._id;
    aadharNumber = req.profile.aadharNumber;    
    await HospitalForm.find({ user: id }).exec((err, form) => {
        if (err || !form) {
            return res.stauts(400).json({
                message: "Nothing to show"
            })
        }
        console.log(form);
        res.json(form);
    })
}

exports.getAllUsers = (req, res) => {
    User.find().exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                message: "Could not find users"
            })
        }
        res.json(user);
    });
}

exports.getUserByAadhar = (req, res) => {    
    const errors = validationResult(req);    
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg,
        });
    }
    aadharNumber = req.body.aadharNumber;    
    User.findOne({aadharNumber}).exec((err, user) => {
        if(err || !user){
            return res.status(400).json({
                message: "Could not find user by given aadhar number"
            })
        }
            
        res.json(user._id)
    })
}