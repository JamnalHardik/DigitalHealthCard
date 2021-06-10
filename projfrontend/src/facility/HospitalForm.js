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
import Main from "./Main";
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
    aadhar: ""
  })
  const { hospitalName, doctorName, symptoms, dischargeDate, disease, medicine, error, success, user, aadhar } = values;
  const { hospital, token } = isAuthenticated();

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

  const errorMessage = () => {
    return (
      <div className="d-flex justify-content-center mt-2">
        <div className="text-left text-center" style={{ width: 400 }}>
          <div
            className="alert text-white"
            style={{ display: error ? "" : "none", backgroundColor: "#E21717" }}
          >

            {error}
          </div>
        </div>
      </div>
    );
  };

  const onSearch = (event) => {
    event.preventDefault();
    console.log(aadhar);
    getUserByAadhar(aadhar)
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error })
        } else {
          console.log(data);
          setValues({ ...values, user: data, hospitalName: hospital.hospitalName })
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

  const hospitalForm = () => {
    return (
      <div>
        <Navbar />
        
        <Form className="container">          
        <Main name="aadhar" handle={handleChange} aadhar={aadhar} />
          <div id="center">
            <button type="submit" onClick={onSearch} className="btn btn-primary">Search</button>
          </div>
          <div className="mb-2">
            <label for="exampledoctorName" className="form-label">Doctor Name*</label>
            <input type="name" value={doctorName} onChange={handleChange("doctorName")} className="form-control" id="exampledoctorName" />
          </div>
          <div className="mb-2">
            <label for="exampledisease" className="form-label">Symptoms*</label>
            <input type="name" value={symptoms} onChange={handleChange("symptoms")} className="form-control" id="examplesymptoms" />
          </div>
          <div className="mb-2">
            <label for="exampledisease" className="form-label">Disease*</label>
            <input type="name" value={disease} onChange={handleChange("disease")} className="form-control" id="exampledisease" />
          </div>
          <div className="mb-2">
            <label for="exampledisease" className="form-label">Medicine*</label>
            <input type="name" value={medicine} onChange={handleChange("medicine")} className="form-control" id="examplemedicine" />
          </div>
          <div className="mb-3">
            <label for="exampledisease" className="form-label">Discharge Date*</label>
            <input type="date" value={dischargeDate} onChange={handleChange("dischargeDate")} className="form-control" id="exampledischargedate" />
          </div>
          <div id="center">
            <button type="submit" onClick={onSubmit} className="btn btn-primary">Submit</button>
          </div>
        </Form>
      </div>
    )
  }


  return (
    <div>
      {hospitalForm()}
      {errorMessage()}
    </div>

  );
};

export default HospitalForm;
