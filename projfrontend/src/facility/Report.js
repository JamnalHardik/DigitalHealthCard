import React from 'react'
import '../styles.css'
import {
    Jumbotron
  } from "reactstrap";
const Report = () => {
    const pri = () => {
        window.print()
    }

    const main = () => {
        return (
            <div>
                <Jumbotron>
        <h1 className="display-5">Digital HealthCard</h1>
        <h5 className="lead">A Detailed Report of your check-up.</h5>
        <hr className="my-2" />        
        <p>Jamnal Hardik visited Hospital Name where he/she was treated by Doctor Name where he/she was diagoned with Disease.</p> <br/>
        <p>The Symptoms include: </p><br/>
        <p>Medical Treatment Given:</p> <br/>  
        <p>Discharged on:</p> 
      </Jumbotron>
            </div>
        )
    }
    return (
        <div>
            {main()}
            <div id="center">
            <button type="button" onClick={pri} className="noprint btn btn-primary">Download</button>
            </div>
        </div>
    )
}

export default Report
