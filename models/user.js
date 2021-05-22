var mongoose = require("mongoose");
const crypto = require('crypto');
const { v1: uuidv1 } = require('uuid');

var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    encryptedPassword: {
        type: String,
        required: true
    },
    salt: String,
    aadharNumber: {
        type: Number,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        set: v => v.toLowerCase(),
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    }    
});

userSchema
    .virtual("password")
    .set(function (password) {
        this._password = password;
        this.salt = uuidv1();
        this.encryptedPassword = this.securePassword(password);
    })
    .get(function () {
        return this._password;
    });

userSchema.methods = {
    autheticate: function (plainpassword) {
        return this.securePassword(plainpassword) === this.encryptedPassword;
    },

    securePassword: function (plainpassword) {
        if (!plainpassword) return "";
        try {
            return crypto
                .createHmac("sha256", this.salt)
                .update(plainpassword)
                .digest("hex");
        } catch (err) {
            return "";
        }
    }
};

module.exports = mongoose.model("User", userSchema);