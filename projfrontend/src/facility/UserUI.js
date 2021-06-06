import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../styles.css'
const UserUI = () => {
  return (
    <div>

      <nav className="navbar bg-dark" style={{ width: 200 }}>



        <div className="container-fluid" id="bcontent">
          <ul className="navbar-nav" style={{ marginLeft: 20 }}>
            <FontAwesomeIcon className="text-white" pull="right" icon={faUser} size="3x" />
            <li className="nav-item">
              <h6 className="text-light nav-link">Welcome, Poojan</h6>
            </li>
            <hr className="text-white" />
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Health Card</a>
            </li>            
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Reports</a>
            </li>            
            <li className="nav-item">
              <a className="nav-link text-light" href="#">DashBoard </a>
            </li>            
            <div style={{marginBottom: 150}}></div>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Signout</a>
            </li>
          </ul>
        </div>

      </nav>

    </div>
  )
}

export default UserUI
