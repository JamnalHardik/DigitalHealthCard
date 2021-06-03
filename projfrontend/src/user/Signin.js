import React, { useState } from 'react'
import '../styles.css'
import { Link, Redirect } from 'react-router-dom'
import { Form, FormGroup, Label, Input, FormText, Button, Col } from 'reactstrap';
import { signin, authenticate, isAuthenticated } from '../auth/helper'

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    didRedirect: false,
    userRole: "User"
  })


  const { email, password, error, didRedirect, userRole } = values;
  const { user } = isAuthenticated();

  const handleSelect = name => event => {
    setValues({ ...values, userRole: event.target.value })
  }

  const handleChange = name => event => {
    // ...values loads existing values
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const performRedirect = () => {
    //TODO: Do a redirection here
    if (didRedirect) {
      if (user && user.userRole === "User") {
        return <p>redirect to hospital</p>
      } else {
        return <p>Redirect to user dashboard</p>
      }
    }

    if (isAuthenticated()) {
      return <Redirect to="/" />
    }
  }

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signin({ email, password, userRole })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error })
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            })
          })
        }
      })
      .catch()
  }

  const onSubmitHospital = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signin({ email, password, userRole })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error })
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            })
          })
        }
      })
      .catch()
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

  const SignInForm = () => {
    return (
      <div>
        <Form id="form-main2" style={{ marginTop: 100 }}>
          <div id="header-form">
            <h2>Digital Health Card</h2>
          </div>
          <FormGroup row className="mb-2">
            <Label for="exampleSelect" sm={2}>Category</Label>
            <Col sm={10}>
              <Input type="select" name="select" id="exampleSelect" onChange={handleSelect()}>
                <option id="user">User</option>
                <option id="hospital">Hospital</option>
              </Input>
            </Col>
          </FormGroup>
          {(userRole === "User") && <div>
            <FormGroup row className="mb-4 " style={{ marginTop: 80 }} id="center">
              <Col sm={11}>
                <Input type="email" onChange={handleChange("email")} value={email} name="email" id="exampleEmail" placeholder="Enter email" />
              </Col>
            </FormGroup>
            <FormGroup row style={{ marginBottom: 70 }} id="center">
              <Col sm={11}>
                <Input type="password" onChange={handleChange("password")} value={password} name="password" id="examplePassword" placeholder="Enter Password" />
              </Col>
            </FormGroup>
            <div id="center" style={{ marginBottom: 20 }}><Button onClick={onSubmit} color="primary" size="md">Log in</Button>{' '}</div>
            <p id="center">New User? <Link to="/signup">Signup</Link></p>
          </div>}

          {userRole === "Hospital" && <div>
            <FormGroup row className="mb-4 " style={{ marginTop: 80 }} id="center">
              <Col sm={11}>
                <Input type="email" onChange={handleChange("email")} value={email} name="email" id="exampleEmail" placeholder="Enter email" />
              </Col>
            </FormGroup>
            <FormGroup row style={{ marginBottom: 70 }} id="center">
              <Col sm={11}>
                <Input type="password" onChange={handleChange("password")} value={password} name="password" id="examplePassword" placeholder="Enter Password" />
              </Col>
            </FormGroup>
            <div id="center" style={{ marginBottom: 20 }}><Button onClick={onSubmitHospital} color="primary" size="md">Log in</Button>{' '}</div>
            <p id="center">New User? <Link to="/signup">Signup</Link></p>
          </div>}
        </Form>

      </div>
    )
  }

  return (
    <div>
      {SignInForm()}
      {errorMessage()}
    </div>
  )
}

export default Signin
