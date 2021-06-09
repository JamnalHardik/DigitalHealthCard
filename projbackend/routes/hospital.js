var express = require('express');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
var router = express.Router();
const { fillData, getHospitalById } = require("../controllers/hospital");
const { getUserById, getAllUsers } = require("../controllers/user");

router.param("hospitalId", getHospitalById);
router.param("userId", getUserById);
// router.param("userId", getUserById);

router.post("/hospital/form/:hospitalId", isSignedIn, isAuthenticated, fillData);
router.get("/hospital/users/:hospitalId", isSignedIn, isAuthenticated, getAllUsers);
// router.get("/hospital/:hospitalId", getHospitalById);

module.exports = router;
