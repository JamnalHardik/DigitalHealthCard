import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'
import HealthCard from './facility/HealthCard'
import UserRoute from './auth/helper/UserRoute'
import HospitalRoute from './auth/helper/HospitalRoute'
import HospitalUI from './facility/HospitalUI' 

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signup" exact component={Signup} />
                <Route path="/" exact component={Signin} />                
                <UserRoute path="/user/healthcard" exact component={HealthCard} />
                <HospitalRoute path="/hospital/dashboard" exact component={HospitalUI} />
            </Switch>
        </Router>
    )
}

export default Routes
