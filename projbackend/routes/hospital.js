var express = require('express');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
var router = express.Router();
const { fillData, getHospitalById } = require("../controllers/hospital");


router.param("hospitalId", getHospitalById);
// router.param("userId", getUserById);

router.post("/hospital/:hospitalId", isSignedIn, isAuthenticated, fillData);

module.exports = router;
