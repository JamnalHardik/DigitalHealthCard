var express = require('express');
var router = express.Router();
const { signup, signin, signout, isSignedIn } = require("../controllers/auth");
const { check } = require('express-validator');

router.post("/signup",
    [
        check('email').isEmail().withMessage({
            message: 'Please check your email'
        }),
        check('password')
            .isLength({ min: 5 })
            .withMessage('must be at least 5 chars long')
    ]
    , signup);

router.post("/signin",
    [
        check('email').isEmail().withMessage({
            message: 'Please check your email'
        }),
        check('password')
            .isLength({ min: 5 })
            .withMessage('must be at least 5 chars long')
    ], signin)

router.get("/signout", signout)

module.exports = router;