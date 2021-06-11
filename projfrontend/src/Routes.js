import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'
import HealthCard from './facility/HealthCard'
import UserRoute from './auth/helper/UserRoute'
import HospitalRoute from './auth/helper/HospitalRoute'
import HospitalUI from './facility/HospitalUI' 
import HospitalForm from './facility/HospitalForm'
import Report from './facility/Report'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signup" exact component={Signup} />
                <Route path="/" exact component={Signin} />                
                <UserRoute path="/user/healthcard" exact component={HealthCard} />
                <UserRoute path="/report/download" exact component={Report} />
                <HospitalRoute path="/hospital/dashboard" exact component={HospitalUI} />
                <HospitalRoute path="/hospital/form" exact component={HospitalForm} />
            </Switch>
        </Router>
    )
}

export default Routes
