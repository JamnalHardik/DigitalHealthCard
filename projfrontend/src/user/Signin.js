import React, {useState} from 'react'
import '../styles.css'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input, FormText, Button, Col } from 'reactstrap';

const Signin = () => {
    return (
        <div>
         <Form id="form-main2" style={{marginTop:100}}> 
           <div id="header-form">
          <h2>Digital Health Card</h2>
        </div>
        
        <FormGroup row className="mb-4 " style={{marginTop:80}}  id="center">
              <Col sm={11}>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" />
              </Col>
            </FormGroup>
            <FormGroup row style={{marginBottom:70}}  id="center">
              <Col sm={11}>
                <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" />
              </Col>
            </FormGroup>
            <div id="center" style={{marginBottom:20}}><Button color="primary" size="md">Log in</Button>{' '}</div>
            <p id="center">New User? <Link to="/signup">Signup</Link></p>
        </Form>
        
        </div>
    )
}

export default Signin
