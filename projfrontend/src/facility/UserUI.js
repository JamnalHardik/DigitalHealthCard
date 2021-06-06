import React from "react";
import ReactDOM from "react-dom";
// import "../styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Link from "react-router-dom";
import Navbar from "../core/Navbar";
import { Table } from "reactstrap";
const UserUI = () => {
  const healthCard = () => {
    return (
      <div>
        <div id="header-main" className="mb-5">
          <h2>Health Card</h2>
        </div>
        <Table hover  className="container table table-bordered">
          <thead className="text-light" style={{backgroundColor:'#8e2de2'}}>
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Hardik</td>
              <td><button className="btn btn-success">Download  <FontAwesomeIcon
              className="text-white"
              icon={faFilePdf}
              size="1x"
            /></button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Hardik</td>
              <td>Hardik</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
              <td>Hardik</td>
              <td>Hardik</td>
            </tr>
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

export default UserUI;
