var mongoose = require("mongoose");

var hospitalForm = new mongoose.Schema({
    doctorName: {
        type: String,
        required: true
    },
    disease: {
        type: String,
        required: true,
    },
    medicine: {
        type: String,
        required: true
    },
    medicine: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("HospitalForm", hospitalForm);