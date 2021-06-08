import React, { useState } from 'react'
import '../styles.css'
import '../sign.css'
import { Form, FormGroup, Label, Input, FormText, Button, Col } from 'reactstrap';
import { signupHospital, signupUser } from '../auth/helper'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    aadharNumber: "",
    email: "hardik@gmail.com",
    password: "hardik123",
    password2: "hardik123",
    dateOfBirth: "",
    mobileNumber: 7016554608,
    error: "",
    success: false,
    userRole: "User",
    hospitalName: "XYZ Hospital",
    address: "7 Deepsagar",
    registrationNumber: 87656465456
  });


  const {
    firstName,
    lastName,
    aadharNumber,
    email,
    password,
    dateOfBirth,
    password2,
    error,
    success,
    userRole,
    mobileNumber,
    hospitalName,
    address,
    registrationNumber } = values;


  const handleSelect = name => event => {
    setValues({ ...values, userRole: event.target.value })
  }

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false })
    if (password === password2) {
      signupUser({ firstName, lastName, aadharNumber, email, password, dateOfBirth, mobileNumber, userRole })
        .then(data => {
          console.log(data);
          if (data.error) {
            console.log(data.error);
            setValues({ ...values, error: data.error, success: false })
          } else {
            setValues({
              ...values,
              firstName: "",
              lastName: "",
              aadharNumber: "",
              email: "",
              password: "",
              password2: "",
              dateOfBirth: "",
              mobileNumber: "",
              error: "",
              success: true
            })
          }
        })
        .catch(console.log("Error in signup"));
    } else {
      alert("Password Does not match.")
      setValues({ ...values, password2: "" })
    }
  }

  const onSubmitHospital = event => {
    event.preventDefault();
    setValues({ ...values, error: false })
    if (password === password2) {

      signupHospital({ hospitalName, address, registrationNumber, email, password, mobileNumber, userRole })
        .then(data => {
          // console.log(data);
          if (data.error) {
            console.log(data.error);
            setValues({ ...values, error: data.error, success: false })
          } else {
            setValues({
              ...values,
              hospitalName: "",
              address: "",
              registrationNumber: "",
              email: "",
              password: "",
              password2: "",              
              mobileNumber: "",
              error: "",
              success: true
            });
          }
        });
    } else {
      alert("Password Does not match.")
      setValues({ ...values, password2: "" })
    }
  }

  const errorMessage = () => {
    return (

      <div className="d-flex justify-content-center mt-2">
      <div className="text-left text-center" style={{width:400}}>
        <div className="alert text-white" style={{ display: error ? "" : "none" , backgroundColor:'#E21717'}}> {error} </div>
      </div>
    </div>
    
    )

  }

  const successMessage = () => {
    return (
      <div className="d-flex justify-content-center mt-2">
      <div className="text-left text-center" style={{width:400}}>
          <div className="alert alert-success text-white" style={{ display: success ? "" : "none" ,backgroundColor:'#6EC72D'}}>New Account create successfully. Please <Link to="/">Login Here</Link> </div>
        </div>
      </div>
    )

  }


  const SignupForm = () => {
    return (
      <div >
        <div id="header-main">
          <h1>Digital Health Card</h1>
        </div>
        <Form id="form-main">
          <FormGroup row className="mb-2">
            <Label for="exampleSelect" sm={2}>Category</Label>
            <Col sm={10}>
              <select name="select" id="exampleSelect" onChange={handleSelect()} style={{width: 200, height: 30}} autoFocus>
                <option id="user">User</option>
                <option id="hospital">Hospital</option>
              </select>
            </Col>
          </FormGroup>
          {(userRole === "User") && <div>
            <FormGroup row className="mb-2">
              <Label for="examplefirstname" sm={2}>First Name*</Label>
              <Col sm={10}>
                <Input type="name" name="firstname" value={firstName} id="examplefirstname" onChange={handleChange("firstName")} placeholder="eg-Poojan" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="examplelastname" sm={2}>Last Name</Label>
              <Col sm={10}>
                <Input type="name" name="lastname" value={lastName} id="examplelastname" placeholder="eg-Pandya" onChange={handleChange("lastName")} />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="exampleaadhar" sm={2}>Aadhar No*</Label>
              <Col sm={10}>
                <Input type="name" name="aadhar" value={aadharNumber} id="exampleaadhar" placeholder="12-Digit Aadhar Number" onChange={handleChange("aadharNumber")} />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="exampleEmail" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="email" value={email} id="exampleEmail" placeholder="eg-poojanpandya@gmail.com" onChange={handleChange("email")} />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="examplePassword" sm={2}>Password</Label>
              <Col sm={10}>
                <Input type="password" name="password" value={password} id="examplePassword" placeholder="" onChange={handleChange("password")} />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="examplePassword2" sm={2}>Confirm Password</Label>
              <Col sm={10}>
                <Input type="password" name="password2" value={password2} id="examplePassword2" placeholder="" onChange={handleChange("password2")} />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="exampledob" sm={2}>Date of Birth*</Label>
              <Col sm={10}>
                <Input type="date" name="dob" value={dateOfBirth} id="exampledob" placeholder="" onChange={handleChange("dateOfBirth")} />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-3">
              <Label for="examplePhone" sm={2}>Phone No</Label>
              <Col sm={10}>
                <Input type="tel" name="phone" value={mobileNumber} id="examplePhone" placeholder="" onChange={handleChange("mobileNumber")} />
              </Col>
            </FormGroup>
            <div id="center"><Button onClick={onSubmit} color="primary" size="lg">Submit</Button>{' '}</div>
          </div>}

          {userRole === "Hospital" && <div>
            <FormGroup row className="mb-2 ">
              <Label for="examplename" id="text-form" sm={2}>Hospital Name*</Label>
              <Col sm={10}>
                <Input type="name" onChange={handleChange("hospitalName")} value={hospitalName} name="name" id="examplename" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2 ">
              <Label for="exampleadd1" id="text-form" sm={2}>Address Line1*</Label>
              <Col sm={10}>
                <Input type="name" onChange={handleChange("address")} value={address} name="name" id="exampleadd1" placeholder="eg-Building Name and Number" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2 ">
              <Label for="exampleadd2" id="text-form" sm={2}>Address Line2*</Label>
              <Col sm={10}>
                <Input type="name" name="name" id="exampleadd2" placeholder="eg-City and District Name" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2 ">
              <Label for="exampleadd3" id="text-form" sm={2}>Address Line3*</Label>
              <Col sm={10}>
                <Input type="name" name="name" id="exampleadd3" placeholder="eg-Nearby Landmark and Pincode" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2 ">
              <Label for="examplereg" id="text-form" sm={2}>Registration Number*</Label>
              <Col sm={10}>
                <Input type="name" onChange={handleChange("registrationNumber")} value={registrationNumber} name="name" id="examplereg" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-3">
              <Label for="examplePhone1" sm={2}>Phone No</Label>
              <Col sm={10}>
                <Input type="tel" onChange={handleChange("mobileNumber")} value={mobileNumber} name="phone" id="examplePhone1" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="exampleEmailHosp" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" onChange={handleChange("email")} value={email} name="email" id="exampleEmailHosp" placeholder="eg-poojanpandya@gmail.com" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="examplePasswordHosp" sm={2}>Password</Label>
              <Col sm={10}>
                <Input type="password" onChange={handleChange("password")} value={password} name="password" id="examplePasswordHosp" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2 mt-2">
              <Label for="examplePassword2Hosp" sm={2}>Confirm Password</Label>
              <Col sm={10}>
                <Input type="password" onChange={handleChange("password2")} value={password2} name="password2" id="examplePassword2Hosp" className="mt-2" placeholder="" />
              </Col>
            </FormGroup>
            <div id="center"><Button color="primary" onClick={onSubmitHospital} size="lg">Submit</Button>{' '}</div>
          </div>}

        </Form>
      </div>
    )
  }

  return (
    <div>
      {SignupForm()}
      {errorMessage()}
      {successMessage()}
    </div>
  )
}

export default Signup
