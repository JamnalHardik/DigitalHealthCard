import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../styles.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#03203C'}}>
          <ul className="navbar-nav" style={{ marginLeft: 20 }}>
            <FontAwesomeIcon
              className="text-white"
              pull="right"
              icon={faUser}
              size="2x"
            />
            <li className="nav-item" style={{marginRight:800}}>
            <h6 className="text-light nav-link">Poojan</h6>
            </li>
            <li className="nav-item">
              <Link to="/user/healthcard" className="nav-link text-light">
                Health Card
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                DashBoard{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Signout
              </a>
            </li>
          </ul>
      </nav>

    </div>
  );
};

export default Navbar;
