import React, { useState, useEffect } from 'react'
import Navbar from "../core/Navbar_Hospital";
import { getAllUserForms, getUserByAadhar } from './helper/facilityapicall';
import Moment from 'moment';
import { Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faPen } from '@fortawesome/free-solid-svg-icons'
import Main from './Main';
import {
  Jumbotron,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Col
} from "reactstrap";
import "../styles.css"
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';
const HospitalUI = (props) => {
  const [values, setValues] = useState({
    aadharNumber: "",
    error: "",
    userId: "",
    healthTable: "",
    hospitalId: "",
    success: false
  })
  const { hospital, token } = isAuthenticated();
  const { aadharNumber, error, userId, healthTable, hospitalId, success } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  }

  const errorMessage = () => {
    return (
      <div className="d-flex justify-content-center mt-2">
        <div className="text-left text-center" style={{ width: 400 }}>
          <div
            className="alert text-white"
            style={{ display: error ? "" : "none", backgroundColor: "#E21717" }}
          >

            {error}
          </div>
        </div>
      </div>
    );
  };


  const onSearch = async (event) => {
    event.preventDefault();
    await getUserByAadhar(aadharNumber)
      .then(async (data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, healthTable: "", success: false })
        } else {
          setValues({ ...values, userId: data, hospitalId: hospital._id, success: true })
          localStorage.setItem("userId", data);
          await preload(data)
        }
      })
  }

  async function preload(userId) {
    await getAllUserForms(userId).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        console.log(data);
        setValues({ ...values, healthTable: data, aadharNumber: "", success: true });
      }
    })
  }

  // useEffect(async () => {
  //   await preload()
  // }, [])

  const healthCard = () => {
    return (
      <div>
        <p style={{ display: (healthTable.length === 0 && success) ? "" : 'none' }} className="text-center text-secondary">Nothing to show</p>
        <div id="center">
          <Link to="/hospital/form" >
            <button type="button" className="btn mb-2 text-light" style={{ backgroundColor: '#207398' }}> <FontAwesomeIcon
              className="text-white"
              icon={faPen}
              size="1x" />  Fill Form </button>
          </Link>
        </div>
        {(healthTable.length !== 0) &&
          <div>
            <Table hover className="container table table-bordered">
              <thead className="text-light" style={{ backgroundColor: '#8e2de2' }}>
                <tr>
                  <th>No.</th>
                  <th>Hospital Name</th>
                  <th>Doctor Name</th>
                  <th>Diagnosis</th>
                  <th>Discharge Date</th>
                  <th>
                    Detailed Report  </th>
                </tr>
              </thead>
              <tbody>
                {healthTable && 
                  healthTable.map((table, index) => (
                    <tr key={index} value={table._id}>
                      <td>{index + 1}</td>
                      <td>{table.hospitalName}</td>
                      <td>{table.doctorName}</td>
                      <td>{table.disease}</td>                      
                      <td>{Moment(table.dischargeDate).format('DD-MM-YYYY')}</td>
                      <td><Link to={`/hospital/download/${table._id}`}><button className="btn btn-success">Download  <FontAwesomeIcon
                        className="text-white"
                        icon={faFilePdf}
                        size="1x" /></button></Link></td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
        }
      </div>
    )

  }

  return (
    <div>
      <Navbar />
      <Jumbotron>
        <h1 className="display-3">Hospital Dashboard</h1>
        <p className="lead">Search for the users by their given Aadhar Number to get their past medical history.</p>
        <hr className="my-2" />
        <Form className="mb-5 container text-center" style={{ width: 500 }}>
          <Main aadharNumber={aadharNumber} handle={handleChange} />
          <div id="center">
            <button type="submit" onClick={onSearch} className="btn btn-primary">Search</button>
          </div>
        </Form>
      </Jumbotron>
      {errorMessage()}
      {healthCard()}
    </div>
  )
}


export default HospitalUI;
