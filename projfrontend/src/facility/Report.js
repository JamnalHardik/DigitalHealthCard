import React, { useState, useEffect } from 'react'
import '../styles.css'
import {
    Jumbotron
} from "reactstrap";
import { isAuthenticated } from "../auth/helper";
import { getAllUserForms } from './helper/facilityapicall';
import Moment from 'moment';

const Report = (props) => {
    const [values, setValues] = useState({
        error: "",
        health: ""
    })

    const { health, error } = values;
    const { user } = isAuthenticated();

    const preloadData = async () => {
        await getAllUserForms(user._id).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                console.log(data);
                console.log(props.match.params.id);
                const result = data.filter(report => report._id == props.match.params.id)
                setValues({ ...values, health: result });
            }
        })
    }

    useEffect(async () => {
        await preloadData()
    }, [])

    const pri = () => {
        window.print()
    }

    const main = () => {
        console.log();
        return (
            <div>
                <Jumbotron>
                    {health && health.map((table, index) => (
                        <div key={index} value={index}>
                            <h1 className="display-5">Digital HealthCard</h1>
                            <h5 className="lead">A Detailed Report of your check-up.</h5>
                            <hr className="my-2" />
                            <p>{user.firstName} visited {table.hospitalName} where he/she was treated by {table.doctorName} where he/she was diagnosed with {table.disease}.</p> <br />
                            <p>The Symptoms include: {table.symptoms}</p><br />
                            <p>Medical Treatment Given: {table.medicine} </p> <br />
                            <p>Discharged on: {Moment(table.dischargeDate).format('DD-MM-YYYY')}</p>
                        </div>
                    ))
                    }
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
