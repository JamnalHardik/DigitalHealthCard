const User = require("../models/user");
const Hospital = require("../models/hospital");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
const { validationResult } = require("express-validator");

exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  if (req.body.userRole == "User") {
    const user = new User(req.body);
    user.save((err, user) => {
      if (err) {
        return res.status(400).json({
          err: "Not able to save user in DB",
        });
<<<<<<< HEAD
    }
    if (req.body.userRole == "Hospital") {
        const hospital = new Hospital(req.body); 
        console.log(hospital);       
        hospital.save((err, hospital) => {
            console.log(err);
            if (err) {
                return res.status(400).json({                    
                    err: "Not able to save user in Database"
                });
            }
            console.log(err);
            res.json({
                hospital
            });
=======
      }
      res.json({
        user,
      });
    });
  }
  if (req.body.userRole == "Hospital") {
    const hospital = new Hospital(req.body);
    hospital.save((err, hospital) => {
      if (err) {
        return res.status(400).json({
          err: "Not able to save user in Database",
>>>>>>> 5991cbd2266abf1251b019500e972b02ab2f2874
        });
      }
      res.json({
        hospital,
      });
    });
  }
};

exports.signin = (req, res) => {
<<<<<<< HEAD
    const errors = validationResult(req);
    const { email, password, userRole } = req.body;
    console.log(req.body);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
=======
  const errors = validationResult(req);
  const { email, password, userRole } = req.body;
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  if (userRole == "User") {
    User.findOne({ email }, (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "User Email does not exist",
>>>>>>> 5991cbd2266abf1251b019500e972b02ab2f2874
        });
      }

      if (!user.authenticate(password)) {
        return res.status(400).json({
          error: "Email id or password does not match.",
        });
      }

      // create Token
      const token = jwt.sign({ _id: user._id }, process.env.SECRET);
      // put token in cookie
      res.cookie("token", token, { expire: new Date() + 9999 });

      //send response to front end
      const { _id, firstName, email, aadharNumber, userRole } = user;
      return res.json({
        token,
        user: { _id, firstName, email, aadharNumber, userRole },
      });
    });
  }
  if (userRole == "Hospital") {
    Hospital.findOne({ email }, (err, hospital) => {
      if (err) {
        return res.status(400).json({
          error: "User Email does not exist",
        });
      }

      if (!hospital.authenticate(password)) {
        return res.status(400).json({
          error: "Email id or password does not match.",
        });
      }

      // create Token
      const token = jwt.sign({ _id: hospital._id }, process.env.SECRET);
      // put token in cookie
      res.cookie("token", token, { expire: new Date() + 9999 });

<<<<<<< HEAD
            //send response to front end
            const { _id, firstName, email, aadharNumber } = hospital;
            return res.json({
                token, hospital: { _id, firstName, email, aadharNumber, userRole }
            });
        });
    }
}
=======
      //send response to front end
      const { _id, firstName, email, aadharNumber } = hospital;
      return res.json({
        token,
        hospital: { _id, firstName, email, aadharNumber, userRole },
      });
    });
  }
};
>>>>>>> 5991cbd2266abf1251b019500e972b02ab2f2874

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signout successfully",
  });
};

// protected routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});

// custom middlewares
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "You are not ADMIN, Access denied",
    });
  }
  next();
};

// hospital name
// address
// registration number:
// mobile number
// password (signin)
// email id (signin)
