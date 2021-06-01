import React, {useState} from 'react'
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
    success: false
  });

  const { firstname, lastName, aadharNumber, email, password, dateOfBirth, error, success } = values;

  const SignupForm = () => {
    return (
      <div>
        <div id="header-main">
          <h1>Digital Health Card</h1>
        </div>
        <Form id="form-main">
        <FormGroup check className="mb-2 mt-5" >
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            User Signup
          </Label>
        </FormGroup>
        <FormGroup check className="mb-4">
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Hospital Signup
          </Label>
        </FormGroup>
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
          
        </Form>
      </div>
    )
  }

  return (
    <div>
      {SignupForm()}
    </div>
  )
}

export default Signup
