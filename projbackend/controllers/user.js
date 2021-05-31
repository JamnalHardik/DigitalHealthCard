const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user){
            return res.status(400).json({
                message: "Could not find user"
            })
        }
        req.profile = user;
        next();
    })
}