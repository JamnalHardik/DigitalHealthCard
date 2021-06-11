import React, { useState, useEffect } from "react";
import Moment from 'moment';
// import "../styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import Navbar from "../core/Navbar";
import { Table, Jumbotron } from "reactstrap";
import { getAllUserForms, getHospitalById } from "./helper/facilityapicall";
import { Form, FormGroup, Label, Input, FormText, Button, Col } from "reactstrap";
import { isAuthenticated } from "../auth/helper";

const HealthCard = () => {
  const [values, setValues] = useState({
    error: "",
    healthTable: "",
    success: false
  })

  const { user } = isAuthenticated();
  const { error, healthTable, success } = values;

  const preload = async () => {
    await getAllUserForms(user._id).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false })
      } else {
        console.log(data);
        setValues({ ...values, healthTable: data, success: true });
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
        <Jumbotron>
          <h1 className="display-3">User Dashboard</h1>
          <p className="lead">A collective health report from all your hospital visits.</p>
          <hr className="my-2" />

        </Jumbotron>
        <div>
          {/* <form className="container">
            <div className=""></div>
            <label htmlFor="aadharNumber">Aadhar Number: </label>
            <Input onChange={handleChange("aadharNumber")} value={aadharNumber} type="text" />
          </form> */}
        </div>

        <h3 style={{ display: (healthTable.length === 0 && success) ? "" : 'none', color: "#242B2E" }} className="text-center">Welcome, {user.firstName}<br /> <h5 className="text-center">As you are a new user your health card will update after your next hospital visit.</h5> </h3>

        {healthTable.length !== 0 && <Table hover className="container table table-bordered">
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
                  <td><Link to="/report/download"><button className="btn btn-success">Download  <FontAwesomeIcon
                    className="text-white"
                    icon={faFilePdf}
                    size="1x" /></button></Link></td>
                </tr>
              ))
            }
          </tbody>
        </Table>}
      </div>
    );
  };
  return (
    <div id="print">
      <Navbar />
      {healthCard()}
    </div>
  );
};

export default HealthCard;
