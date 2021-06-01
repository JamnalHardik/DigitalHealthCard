import React, { useState } from 'react'
import '../styles.css'
import { Form, FormGroup, Label, Input, FormText, Button, Col } from 'reactstrap';
import { signup } from '../auth/helper/index'

const Signup = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    aadharNumber: "",
    email: "",
    password: "",
    dateOfBirth: "",
    phoneNo: "",
    error: "",
    success: false,
    userSignup: "User Signup",

  });


  const { firstname, lastName, aadharNumber, email, password, dateOfBirth, error, success, userSignup, phoneNo } = values;

  const handleSelect = name => event => {   
    setValues({ ...values, userSignup: event.target.value })
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  // const handleChange

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false })
    signup({ firstname, lastName, aadharNumber, email, password, dateOfBirth, phoneNo })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false })
        } else {
          setValues({
            ...values,
            firstname: "",
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
                <Input type="name" name="firstname" id="examplefirstname" onChange={handleChange("firstName")} placeholder="eg-Poojan" />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="examplelastname" sm={2}>Last Name</Label>
              <Col sm={10}>
                <Input type="name" name="lastname" id="examplelastname" placeholder="eg-Pandya" onChange={handleChange("lastName")} />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="exampleaadhar" sm={2}>Aadhar No*</Label>
              <Col sm={10}>
                <Input type="name" name="aadhar" id="exampleaadhar" placeholder="12-Digit Aadhar Number" onChange={handleChange("aadharNumber")} />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="exampleEmail" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="exampleEmail" placeholder="eg-poojanpandya@gmail.com" onChange={handleChange("email")} />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2">
              <Label for="examplePassword" sm={2}>Password</Label>
              <Col sm={10}>
                <Input type="password" name="password" id="examplePassword" placeholder="" onChange={handleChange("password")} />
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
                <Input type="date" name="dob" id="exampledob" placeholder=""  onChange={handleChange("dateOfBirth")}/>
              </Col>
            </FormGroup>
            <FormGroup row className="mb-3">
              <Label for="examplePhone" sm={2}>Phone No</Label>
              <Col sm={10}>
                <Input type="tel" name="phone" id="examplePhone" placeholder="" onChange={handleChange("phoneNo")} />
              </Col>
            </FormGroup>
            <div id="center"><Button onClick={onSubmit} color="primary" size="lg">Submit</Button>{' '}</div>
          </div>}

          {userSignup === "Hospital Signup" && <div>
            <input type="button" value="xyz" />
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
