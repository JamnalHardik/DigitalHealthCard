const express = require("express");
var router = express.Router();
const { getUserById, getAllUserForms, getUser } = require("../controllers/user");
const { fillData, getHospitalById } = require("../controllers/hospital");

router.param("userId", getUserById);

router.get("/user/form/:userId", getAllUserForms);

router.get("/user/:userId", getUser);

module.exports = router;