import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signup" exact component={Signup} />
                <Route path="/" exact component={Signin} />
            </Switch>
        </Router>
    )
}

export default Routes
