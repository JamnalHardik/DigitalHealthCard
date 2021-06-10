const express = require("express");
var router = express.Router();
const { getUserById, getAllUserForms, getUser, getUserByAadhar } = require("../controllers/user");
const { fillData, getHospitalById } = require("../controllers/hospital");
const {isSignedIn, isAuthenticated} = require("../controllers/auth")

router.param("userId", getUserById);
router.param("hospitalId", getHospitalById);

router.get("/user/form/:userId", getAllUserForms);

router.get("/user/:userId", getUser);

router.post("/user/aadhar", getUserByAadhar);

module.exports = router;