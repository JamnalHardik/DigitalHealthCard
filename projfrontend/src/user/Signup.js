import React, { useState } from 'react'
import '../styles.css'
import { Form, FormGroup, Label, Input, FormText, Button, Col } from 'reactstrap';

import { signup } from '../auth/helper/index'

const Signup = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    aadharNumber: "",
    email: "",
    password: "",
    dateOfBirth: "",
    error: "",
    success: false,
    userSignup: "User Signup",

  });


  const { firstname, lastName, aadharNumber, email, password, dateOfBirth, error, success, userSignup } = values;

  const handleChange = name => event => {
    // ...values loads existing values
    setValues({ ...values, userSignup: event.target.value })
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
              <Input type="select" name="select" id="exampleSelect" onChange={handleChange()}>
                <option id="user">User Signup</option>
                <option id="hospital">Hospital Signup</option>
              </Input>
            </Col>
          </FormGroup>     
            {(userSignup === "User Signup") && <div>
            <FormGroup row className="mb-2">
              <Label for="examplefirstname" sm={2}>First Name*</Label>
              <Col sm={10}>
                <Input type="name" name="firstname" id="examplefirstname" placeholder="eg-Poojan" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="examplelastname" sm={2}>Last Name</Label>
              <Col sm={10}>
                <Input type="name" name="lastname" id="examplelastname" placeholder="eg-Pandya" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="exampleaadhar" sm={2}>Aadhar No*</Label>
              <Col sm={10}>
                <Input type="name" name="aadhar" id="exampleaadhar" placeholder="12-Digit Aadhar Number" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="exampleEmail" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="exampleEmail" placeholder="eg-poojanpandya@gmail.com" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="examplePassword" sm={2}>Password</Label>
              <Col sm={10}>
                <Input type="password" name="password" id="examplePassword" placeholder="" />
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
                <Input type="date" name="dob" id="exampledob" placeholder="" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-3">
              <Label for="examplePhone" sm={2}>Phone No</Label>
              <Col sm={10}>
                <Input type="tel" name="phone" id="examplePhone" placeholder="" />
              </Col>
            </FormGroup>
            <div id="center"><Button color="primary" size="lg">Submit</Button>{' '}</div>
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
            <FormGroup row className="mb-2 mt-2">
              <Label for="examplePassword2Hosp" sm={2}>Confirm Password</Label>
              <Col sm={10}>
                <Input type="password" name="password2" id="examplePassword2Hosp" className="mt-2" placeholder="" />
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
        { SignupForm() }      
    </div>
  )
}

export default Signup
