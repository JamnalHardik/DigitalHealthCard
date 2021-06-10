import React, { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Col,
} from "reactstrap";
import "../styles.css";
import Navbar from "../core/Navbar_Hospital";
import { isAuthenticated } from '../auth/helper/index';
import { getUser, fillData, getUserByAadhar } from './helper/facilityapicall'
const HospitalForm = () => {
  const [values, setValues] = useState({
    hospitalName: "Shalby",
    doctorName: "Meet",
    symptoms: "Cold",
    disease: "Fever",
    medicine: "Paracetamol",
    dischargeDate: "",
    error: "",
    success: "",
    user: "",
    aadharNumber: ""
  })

  const { hospitalName, doctorName, symptoms, dischargeDate, disease, medicine, error, success, user, aadharNumber } = values;
  const { hospital, token } = isAuthenticated()

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  }

  // const loadUser = () => {
  //   getUser('60bcf9ccc938ea0df027a904').then(data => {
  //     if(data.error){
  //       setValues({...values, error: data.error})
  //     } else {
  //       console.log(data);
  //       setValues({...values, user})
  //     }
  //   })
  // }

  // useEffect(() => {
  //   loadUser()
  // }, [])

  const onSearch = (event) => {
    event.preventDefault();    
    console.log(aadharNumber);
    getUserByAadhar(aadharNumber)
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error })
        } else {
          console.log(data);
          setValues({...values, user: data})
          console.log(user);
        }

      })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setValues({ ...values, success: false })
    fillData(hospital._id, token, { hospitalName, doctorName, symptoms, dischargeDate, disease, medicine, user })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false })
        } else {
          console.log(data);
          setValues({
            hospitalName: "",
            doctorName: "",
            symptoms: "",
            dischargeDate: "",
            disease: "",
            medicine: "",
            success: true
          })
        }
      })
  }


  return (
    <div>
      <Navbar />
      <Form className="container">
        <div className="mb-2">
          <label for="aadharNumber" className="form-label">Aadhar Number</label>
          <input type="name" value={aadharNumber} onChange={handleChange("aadharNumber")} className="form-control" id="aadharNumber" />
        </div>
        <div id="center">
          <button type="submit" onClick={onSearch} className="btn btn-primary">Search</button>
        </div>
        <div className="mb-2">
          <label for="examplehospitalName" className="form-label">Hospital Name</label>
          <input type="name" value={hospitalName} onChange={handleChange("hospitalName")} className="form-control" id="examplehospitalName" />
        </div>
        <div className="mb-2">
          <label for="exampledoctorName" className="form-label">Doctor Name</label>
          <input type="name" value={doctorName} onChange={handleChange("doctorName")} className="form-control" id="exampledoctorName" />
        </div>
        <div className="mb-2">
          <label for="exampledisease" className="form-label">Symptoms</label>
          <input type="name" value={symptoms} onChange={handleChange("symptoms")} className="form-control" id="examplesymptoms" />
        </div>
        <div className="mb-2">
          <label for="exampledisease" className="form-label">Disease</label>
          <input type="name" value={disease} onChange={handleChange("disease")} className="form-control" id="exampledisease" />
        </div>
        <div className="mb-2">
          <label for="exampledisease" className="form-label">Medicine</label>
          <input type="name" value={medicine} onChange={handleChange("medicine")} className="form-control" id="examplemedicine" />
        </div>
        <div className="mb-3">
          <label for="exampledisease" className="form-label">Discharge Date</label>
          <input type="date" value={dischargeDate} onChange={handleChange("dischargeDate")} className="form-control" id="exampledischargedate" />
        </div>
        <div id="center">
          <button type="submit" onClick={onSubmit} className="btn btn-primary">Submit</button>
        </div>
      </Form>

    </div>
  );
};

export default HospitalForm;
