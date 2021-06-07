import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../styles.css'
import { Link, withRouter } from 'react-router-dom';
import { signout } from "../auth/helper";
import { isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#FFFFFF" }
  } else {
    return { color: "grey" }
  }
}

const Navbar = ({ history }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#03203C' }}>
        <ul className="navbar-nav" style={{ marginLeft: 20 }}>
          <FontAwesomeIcon
            className="text-white"
            pull="right"
            icon={faUser}
            size="2x"
          />
          <li className="nav-item" style={{ marginRight: 800 }}>
            <h6 className="text-light nav-link">{isAuthenticated().user.firstName}</h6>
          </li>
          <li>
          <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </li>
          <li className="nav-item" style={{padding: 8, cursor: "pointer"}}>
            <span 
            style={currentTab(history, "/user/dashboard")}
              onClick={() => {
                signout(() => {
                  history.push("/");
                })
              }}>
              Signout</span>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default withRouter(Navbar);
