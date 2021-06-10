import React, { useState, useEffect } from 'react'
import Navbar from "../core/Navbar_Hospital";
import { getAllUserForms, getUserByAadhar } from './helper/facilityapicall';
import Moment from 'moment';
import { Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Main from './Main';
import {
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
const HospitalUI = () => {
  const [values, setValues] = useState({
    aadhar: "",
    error: "",
    user: "",
    healthTable: "",
    hospitalId: ""
  })
  const {hospital, token} = isAuthenticated();  
  const { aadhar, error, user, healthTable, hospitalId } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  }

  const onSearch = async (event) => {
    event.preventDefault();
    console.log(aadhar);
    await getUserByAadhar(aadhar)
      .then(async (data) => {
        if (data.error) {
          setValues({ ...values, error: data.error })
        } else {
          console.log(data);
          setValues({ ...values, user: data, hospitalId: hospital._id })
          await preload(data)
        }
      })
  }

  async function preload (userId) {
    console.log(user);
    await getAllUserForms(userId).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        console.log(data);
        setValues({ ...values, healthTable: data });
        // console.log(healthTable);
      }
    })
  }

  // useEffect(async () => {
  //   await preload()
  // }, [])

  const healthCard = () => {
    return (
      <div>
          {healthTable && <Table hover className="container table table-bordered">
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
                  <td><button className="btn btn-success">Download  <FontAwesomeIcon
                    className="text-white"
                    icon={faFilePdf}
                    size="1x" /></button></td>
                </tr>
              ))
            }
          </tbody>
        </Table>}
      </div>
    )

  }

  return (
    <div>
      <Navbar />
      <Form className="mb-5 container text-center" style={{ width: 500 }}>
        <Main aadhar={aadhar} handle={handleChange} />
        <div id="center">
          <button type="submit" onClick={onSearch} className="btn btn-primary">Search</button>
        </div>
      </Form>
      {healthCard()}
    </div>
  )
}


export default HospitalUI;
