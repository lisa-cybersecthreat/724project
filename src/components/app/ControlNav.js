import React from "react";
import {
    NavLink
} from "react-router-dom"

function ControlNav(props) {
    console.log(props)
    return(
        <nav className="control-nav">
        <NavLink exact 
            to={{
                pathname: `/app`,
                state: props.State
            }}
            activeClassName="control-nav-active"
        >
            Dashboard
        </NavLink>
        <NavLink exact 
            to={{
                pathname: `/app/myaccount`,
                state: props.State
            }}
            activeClassName="control-nav-active" 
        >
            myaccount
        </NavLink>
    </nav>
    )
}

export default ControlNav;