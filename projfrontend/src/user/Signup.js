import React from 'react'
import '../styles.css'
import { Form, FormGroup, Label, Input, FormText, Button ,Col} from 'reactstrap';

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
      <FormGroup row className="mb-3">
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </Col>
      </FormGroup>
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
