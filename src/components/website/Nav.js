import React from "react";
import {
    NavLink
} from "react-router-dom";

import "../../styles/Nav.scss";
import logo from "../../images/logo.png";

function Nav (props) {
    return(
        <nav>
            <a href="/"><img src={logo} alt="logo" /></a>
            <div className="menu">
                <NavLink exact to="/" activeClassName="active-link">
                    home
                </NavLink>
                <NavLink exact to="/login" activeClassName="active-link">
                    login
                </NavLink>
                <NavLink exact to="/register" activeClassName="active-link">
                    register
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav;