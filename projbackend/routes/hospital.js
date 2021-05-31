var express = require('express');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
var router = express.Router();
const { fillData, getHospitalById } = require("../controllers/hospital");
const { getUserById } = require("../controllers/user");

router.param("hospitalId", getHospitalById);
router.param("userId", getUserById);
// router.param("userId", getUserById);

router.post("/hospital/:hospitalId", isSignedIn, isAuthenticated, fillData);

module.exports = router;
