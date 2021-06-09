import React from "react";
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
const HospitalForm = () => {
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
