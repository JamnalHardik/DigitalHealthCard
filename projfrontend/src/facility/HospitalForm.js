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
import "../form.css";
const HospitalForm = () => {
  return (
    <div>
    <Form style={{}}>
    <div class="mb-3">
    <label for="examplehospitalName" class="form-label">Hospital Name</label>
    <input type="name" class="form-control" id="examplehospitalName" />
  </div>
   <div class="mb-3">
    <label for="exampledoctorName" class="form-label">Doctor Name</label>
    <input type="name" class="form-control" id="exampledoctorName" />
  </div>
  <div className="mb-3">
  <label for="exampledisease" class="form-label">Symptoms</label>
    <input type="name" class="form-control" id="examplesymptoms" />
  </div>
  <div class="mb-3">
    <label for="exampledisease" class="form-label">Disease</label>
    <input type="name" class="form-control" id="exampledisease" />
  </div>
  <div class="mb-3">
    <label for="exampledisease" class="form-label">Medicine</label>
    <input type="name" class="form-control" id="examplemedicine" />
   </div>
   <div class="mb-3">
    <label for="exampledisease" class="form-label">Discharge Date</label>
    <input type="date" class="form-control" id="exampledischargedate" />
   </div>

  <button type="submit" class="btn btn-primary">Submit</button>
    </Form>
      
    </div>
  );
};

export default HospitalForm;
