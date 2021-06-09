import React, { useState } from "react";
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
import {isAuthenticated} from '../auth/helper/index';
import {getUser, fillData} from './helper/facilityapicall'
const HospitalForm = () => {
  const [values, setValues] = useState({
    hospitalName: "",
    doctorName: "",
    symptoms: "",
    disease: "",
    medicine: "",
    dischargeDate: "",
    error: "",
    success: "",
    user: ""
  })

  const { hospitalName, doctorName, symptoms, dischargeDate, disease, medicine, error, success, user } = values;
  const { hospital, token } = isAuthenticated()

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, name: event.target.value });
  }

  const loadUser = () => {
    getUser('60bcf9ccc938ea0df027a904').then(data => {
      if(data.error){
        setValues({...values, error: data.error})
      } else {
        console.log(data);
        setValues({...values, user: data})
      }
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setValues({ ...values, success: false })
    fillData(hospital._id, token, { hospitalName, doctorName, symptoms, dischargeDate, disease, medicine })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false })
        } else {
          setValues({
            hospitalName: "",
            doctorName: "",
            symptoms: "",
            dischargeDate: "",
            disease: "",
            medicine: ""
          })
        }
      })



  }

  return (
    <div>
      <Navbar />
    <Form className="container">
    <div className="mb-2">
    <label for="examplehospitalName" className="form-label">Hospital Name</label>
    <input type="name" className="form-control" id="examplehospitalName" />
  </div>
   <div className="mb-2">
    <label for="exampledoctorName" className="form-label">Doctor Name</label>
    <input type="name" className="form-control" id="exampledoctorName" />
  </div>
  <div className="mb-2">
  <label for="exampledisease" className="form-label">Symptoms</label>
    <input type="name" className="form-control" id="examplesymptoms" />
  </div>
  <div className="mb-2">
    <label for="exampledisease" className="form-label">Disease</label>
    <input type="name" className="form-control" id="exampledisease" />
  </div>
  <div className="mb-2">
    <label for="exampledisease" className="form-label">Medicine</label>
    <input type="name" className="form-control" id="examplemedicine" />
   </div>
   <div className="mb-3">
    <label for="exampledisease" className="form-label">Discharge Date</label>
    <input type="date" className="form-control" id="exampledischargedate" />
   </div>
    <div  id="center">
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
    </Form>
      
    </div>
  );
};

export default HospitalForm;
