import React from "react";
import {
    // HashRouter as Router,
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";

import Home from "../components/website/Home"
import Login from '../components/website/Login';
import Nav from "../components/website//Nav";
import Register from "../components/website/Register";
import Notfound from "./Notfound";

function Website() {
    return(
        <div>
            <Router>
                <Nav/>
                <Switch>
                    <Route exact path="/" component={()=><Home/>} />
                    <Route exact path="/login" component={()=><Login/>} />
                    <Route exact path="/register" component={(props)=><Register{...props}/>} />
                    <Route path='*' exact={true} component={Notfound} />
                    {/* <Redirect to="/404" /> */}
                </Switch>
            </Router>
        </div>
    )
}

export default Website;