import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'
import HealthCard from './facility/HealthCard'
import UserRoute from './auth/helper/UserRoute'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signup" exact component={Signup} />
                <Route path="/" exact component={Signin} />                
                <UserRoute path="/user/healthcard" component={HealthCard} />
            </Switch>
        </Router>
    )
}

export default Routes
