var express = require('express');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
var router = express.Router();
const { fillData, getHospitalById } = require("../controllers/hospital");
const { getUserById, getAllUsers, getAllUserForms } = require("../controllers/user");
const { check } = require('express-validator');

router.param("hospitalId", getHospitalById);
router.param("userId", getUserById);
// router.param("userId", getUserById);

router.post("/hospital/form/:hospitalId",
    [
        check('doctorName')
            .notEmpty()
            .withMessage('Doctor Name is required.'),
        check('disease')
            .notEmpty()
            .withMessage('Name of Disease is required.'),
        check('medicine')
            .notEmpty()
            .withMessage('Medicine name is required..'),
        check('symptoms')
            .notEmpty()
            .withMessage('Symptoms are required.'),
        check('dischargeDate')
            .notEmpty()
            .withMessage('Discharge date is required.'),
    ],
    isSignedIn, isAuthenticated, fillData);
router.get("/hospital/users/:hospitalId", isSignedIn, isAuthenticated, getAllUsers);
// router.get("/hospital/:hospitalId", getHospitalById);

// router.get("/user/form/:userId/:hospitalId", isSignedIn, isAuthenticated,  getAllUserForms);

module.exports = router;
