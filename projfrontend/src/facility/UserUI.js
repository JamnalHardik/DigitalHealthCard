import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../styles.css'
const UserUI = () => {
    return (
        <div>
            
            <nav className="navbar bg-dark border" style={{width:200}}>
            


 <div className="container-fluid" id="bcontent">
<ul className="navbar-nav ">


<li className="nav-item pl-2">
<FontAwesomeIcon className="text-white" pull="right" icon={faUser}  size="3x"/>
<h6 className="text-light nav-link">Welcome</h6>
  </li>
  <li className="nav-item border border-light pl-2">
    <a className="nav-link text-light"   href="#">Health Card</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light" href="#">Reports</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light"   href="#">DashBoard </a>

  </li>
  
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
