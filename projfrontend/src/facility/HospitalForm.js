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
import { isAuthenticated } from "../auth/helper";

import "../form.css";
import { fillData, getUser } from "./helper/facilityapicall";

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
      <Form style={{}}>
        <div class="mb-3">
          <label for="examplehospitalName" class="form-label">Hospital Name</label>
          <input type="name" value={hospitalName} class="form-control" id="examplehospitalName" />
        </div>
        <div class="mb-3">
          <label for="exampledoctorName" class="form-label">Doctor Name</label>
          <input type="name" value={doctorName} class="form-control" id="exampledoctorName" />
        </div>
        <div className="mb-3">
          <label for="exampledisease" class="form-label">Symptoms</label>
          <input type="name" value={symptoms} class="form-control" id="examplesymptoms" />
        </div>
        <div class="mb-3">
          <label for="exampledisease" class="form-label">Disease</label>
          <input type="name" value={disease} class="form-control" id="exampledisease" />
        </div>
        <div class="mb-3">
          <label for="exampledisease" class="form-label">Medicine</label>
          <input type="name" value={medicine} class="form-control" id="examplemedicine" />
        </div>
        <div class="mb-3">
          <label for="exampledisease" class="form-label">Discharge Date</label>
          <input type="date" value={dischargeDate} class="form-control" id="exampledischargedate" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </Form>

    </div>
  );
};

export default HospitalForm;
