import React, { useState } from 'react'
import '../styles.css'
import { Form, FormGroup, Label, Input, FormText, Button, Col } from 'reactstrap';
import { signup } from '../auth/helper'

const Signup = () => {
  const [values, setValues] = useState({
    firstName: "Poojan",
    lastName: "Pandya",
    aadharNumber: "888866662323",
    email: "pandya@gmail.com",
    password: "123456789",
    dateOfBirth: "",
    phoneNo: "7016544608",
    error: "",
    success: false,
    userSignup: "User Signup",
    role: 0
  });


  const { firstName, lastName, aadharNumber, email, password, dateOfBirth, error, success, userSignup, phoneNo, role } = values;

  const handleSelect = name => event => {   
    setValues({ ...values, userSignup: event.target.value })
  }

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  // const handleChange

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false })
    signup({ firstName, lastName, aadharNumber, email, password, dateOfBirth, phoneNo, role })
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
            dateOfBirth: "",
            phoneNo: "",
            error: "",
            success: true
          });
        }
      });
  }

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">          
          <div className="alert alert-danger" style={{ display: error ? "" : "none" }}> {error} </div>
        </div>
      </div>
    )

  }


  const SignupForm = () => {
    return (
      <div>
        <div id="header-main">
          <h1>Digital Health Card</h1>
        </div>
        <Form id="form-main">
          <FormGroup row className="mb-2">
            <Label for="exampleSelect" sm={2}>Category</Label>
            <Col sm={10}>
              <Input type="select" name="select" id="exampleSelect" onChange={handleSelect()}>
                <option id="user">User Signup</option>
                <option id="hospital">Hospital Signup</option>
              </Input>
            </Col>
          </FormGroup>
          {(userSignup === "User Signup") && <div>
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
                <Input type="password" name="password2" id="examplePassword2" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="exampledob" sm={2}>Date of Birth*</Label>
              <Col sm={10}>
                <Input type="date" name="dob" value={dateOfBirth} id="exampledob" placeholder=""  onChange={handleChange("dateOfBirth")}/>
              </Col>
            </FormGroup>
            <FormGroup row className="mb-3">
              <Label for="examplePhone" sm={2}>Phone No</Label>
              <Col sm={10}>
                <Input type="tel" name="phone" value={phoneNo} id="examplePhone" placeholder="" onChange={handleChange("phoneNo")} />
              </Col>
            </FormGroup>
            <div id="center"><Button onClick={onSubmit} color="primary" size="lg">Submit</Button>{' '}</div>
          </div>}

          {userSignup === "Hospital Signup" && <div>
          <FormGroup row className="mb-2 ">
              <Label for="examplename" id="text-form" sm={2}>Hospital Name*</Label>
              <Col sm={10}>
                <Input type="name" name="name" id="examplename" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2 ">
              <Label for="exampleadd1" id="text-form" sm={2}>Address Line1*</Label>
              <Col sm={10}>
                <Input type="name" name="name" id="exampleadd1" placeholder="eg-Building Name and Number" />
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
                <Input type="name" name="name" id="examplereg" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-3">
              <Label for="examplePhone1" sm={2}>Phone No</Label>
              <Col sm={10}>
                <Input type="tel" name="phone" id="examplePhone1" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="exampleEmailHosp" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="exampleEmailHosp" placeholder="eg-poojanpandya@gmail.com" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="examplePasswordHosp" sm={2}>Password</Label>
              <Col sm={10}>
                <Input type="password" name="password" id="examplePasswordHosp" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="examplePassword2Hosp" sm={2}>Confirm Password</Label>
              <Col sm={10}>
                <Input type="password" name="password2" id="examplePassword2Hosp" placeholder="" />
              </Col>
            </FormGroup>
            <div id="center"><Button color="primary" size="lg">Submit</Button>{' '}</div>
          </div>}

        </Form>
      </div>
    )
  }

  return (
    <div>
      {errorMessage()} 
      {SignupForm()}
    </div>
  )
}

export default Signup
