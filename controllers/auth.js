const User = require("../models/user");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
const { validationResult } = require('express-validator');

exports.signup = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        });
    }

    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: "Not able to save user in DB"
            });
        }
        res.json({
            user
        });
    });
}

exports.signin = (req, res) => {
    const errors = validationResult(req);
    const { aadharNumber, password } = req.body;
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        });
    }
    User.findOne({ aadharNumber }, (err, user) => {
        if (err) {
            return res.status(400).json({
                error: "User Email does not exist"
            })
        }

        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: "Email id or password does not match."
            })
        }

        // create Token
        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        // put token in cookie
        res.cookie("token", token, { expire: new Date() + 9999 })

        //send response to front end
        const { _id, firstName, email, aadharNumber } = user;
        return res.json({
            token, user: { _id, firstName, email, aadharNumber }
        });
    });
}

exports.signout = (req, res) => {
    res.clearCookie("token");
    res.json({
        message: "User signout successfully"
    });
};

// protected routes
exports.isSignedIn = expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'], userProperty: "Auth" });

// custom middlewares
exports.isAuthenticated = (req, res, next) => {
    let checker = req.profile && req.auth && (req.profile._id === req.auth._id);
    if (!checker) {
        return res.status(403).json({
            error: "ACCESS DENIED"
        });
    }
    next();
}

exports.isAdmin = (req, res, next) => {
    if (req.profile.role === 0) {
        return res.status(403).json({
            error: "You are not ADMIN, Access denied"
        });
    }
    next();
};