import React, { useEffect, useState } from "react";
import {
  Jumbotron,
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faPen, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
const HospitalForm = () => {
  const [values, setValues] = useState({
    hospitalName: "Shalby",
    doctorName: "",
    symptoms: "",
    disease: "",
    medicine: "",
    dischargeDate: "",
    error: "",
    success: "",
    user: localStorage.getItem("userId"),
    aadharNumber: ""
  })
  const { hospitalName, doctorName, symptoms, dischargeDate, disease, medicine, error, success, user, aadharNumber } = values;
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

  const successMessage = () => {
    return (
      <div className="d-flex justify-content-center mt-2">
        <div className="text-left text-center" style={{ width: 400 }}>
          <div
            className="alert text-white"
            style={{ display: success ? "" : "none", backgroundColor: "#E21717" }}
          >

            <p>Form Submitted Succcessfully.</p>
          </div>
        </div>
      </div>
    );
  };

  var count = 1;
  const onSubmit = (event) => {
    event.preventDefault()
    setValues({ ...values, success: false })
    console.log(hospitalName);
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
          setInterval(() => {
            if(count == 0){
              window.location = "/hospital/dashboard"
            }
            count--;
          }, 500);
        }
      })
  }

  const hospitalForm = () => {
    return (
      <div>
        <Navbar />
        <Jumbotron>
        <h1 className="display-3">Hospital Form</h1>
        <p className="lead">Enter Aadhar Card Number to fill Form.</p>
        <hr className="my-2" />        
        </Jumbotron>
        <Link to="/hospital/dashboard" >
          <div id="left-align" className="mt-2" style={{ marginLeft: 15 }}>
            <button className="btn mb-2 text-light" style={{ backgroundColor: '#207398' }}> <FontAwesomeIcon
              className="text-white"
              icon={faChevronLeft}
              size="1x" />  Dashboard </button>
          </div>
        </Link>
        <Form className="container">

          {/* <div className="mb-5 container text-center" style={{ width: 500 }} >
            <Main name="aadhar" handle={handleChange} aadharNumber={aadharNumber} />
            <div id="center">
              <button type="submit" onClick={onSearch} className="btn btn-primary">Search</button>
            </div>
          </div> */}
          {errorMessage()}
          {successMessage()}
          {user && <div>
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
              <button type="submit" onClick={onSubmit} className="mb-3 btn btn-primary">Submit</button>
            </div>
          </div>}

        </Form>
      </div>
    )
  }


  return (
    <div>      
      {hospitalForm()}

    </div>

  );
};

export default HospitalForm;
