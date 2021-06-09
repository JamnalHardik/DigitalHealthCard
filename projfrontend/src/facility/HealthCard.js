import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Moment from 'moment';
// import "../styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Link from "react-router-dom";
import Navbar from "../core/Navbar";
import { Table } from "reactstrap";
import { getAllUserForms, getHospitalById } from "./helper/facilityapicall";
import { Form, FormGroup, Label, Input, FormText, Button, Col } from "reactstrap";
import { isAuthenticated } from "../auth/helper";

const HealthCard = () => {
  const [values, setValues] = useState({
    error: "",
    healthTable: "",

  })

  const { user } = isAuthenticated();
  const { error, healthTable } = values;

  const preload = async () => {
    await getAllUserForms(user._id).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        console.log(data);
        setValues({ ...values, healthTable: data });
      }
    })
  }

  useEffect(async () => {
    await preload()
  }, [])

  // const handleChange = (name) => (event) => {
  // // ...values loads existing values
  //   setValues({ ...values, error: false, [name]: event.target.value });
  // };

  const healthCard = () => {
    return (
      <div>
        <div id="header-main" className="mb-5">
          <h2>Health Card</h2>
        </div>
        <div>
          {/* <form className="container">
            <div className=""></div>
            <label htmlFor="aadharNumber">Aadhar Number: </label>
            <Input onChange={handleChange("aadharNumber")} value={aadharNumber} type="text" />
          </form> */}
        </div>
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
                  <td><button className="btn btn-success">Download  <FontAwesomeIcon
                    className="text-white"
                    icon={faFilePdf}
                    size="1x"/></button></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    );
  };
  return (
    <div>
      <Navbar />
      {healthCard()}
    </div>
  );
};

export default HealthCard;
