const express = require("express");
var router = express.Router();
const { getUserById, getAllUserForms } = require("../controllers/user");
const { fillData, getHospitalById } = require("../controllers/hospital");

router.param("userId", getUserById);

router.get("/user/:userId", getAllUserForms);

module.exports = router;