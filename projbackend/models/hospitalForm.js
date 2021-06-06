var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

var hospitalForm = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  disease: {
    type: String,
    required: true,
  },
  medicine: {
    type: String,
    required: true,
  },
  medicineDose: {
    type: String,
    required: true,
  },
  dischargeDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("HospitalForm", hospitalForm);
