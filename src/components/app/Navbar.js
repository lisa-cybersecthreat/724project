import React, { useEffect, useState } from "react";
import {
    NavLink,
    Link
} from "react-router-dom";

import "../../styles/Nav.scss";
import logo from "../../images/logo.png";

import { FcManager } from "react-icons/fc";
import { FaHome, FaUserEdit } from "react-icons/fa"

function Navbar (props) {
    const [isUserCard, setIsUserCard] = useState(false)
    const [thisUser, setThisUser] = useState(
        props.location.state[0]
    )

    console.log(props.location.state===undefined)

    // useEffect(()=>{
    //     setThisUser(props.location.state[0])
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    const clickUserIcon = (e) => {
        setIsUserCard(!isUserCard)
    }

    const clickUserCard = (e) => {
        setIsUserCard(false)
    }

    return(
        <header className="app-header">
            {
                props.location.state===undefined && props.history.push("/404")
            }
            <nav className="app-nav">
                <a href="/"><img src={logo} alt="logo" /></a>
                <div className="menu">
                    <div className="user-icon" onClick={clickUserIcon}><FcManager/>
                        <div className="user-card" onClick={clickUserCard} style={{display: isUserCard ? "block" : "none" }}>
                            <div className="top-div">
                                <FcManager/>
                                <p>{thisUser.userid}</p>
                                <p>{thisUser.email}</p>
                            </div>
                            <div className="bottom-div">
                                <Link to={{
                                    pathname: `${props.match.path}/myaccount`,
                                    state: props.location.state
                                    }}>my account</Link>
                                <a href="/">log out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="control-nav">
                <NavLink exact 
                    to={{
                        pathname: `/app`,
                        state: props.location.state
                    }}
                    activeClassName="control-nav-active"
                >
                    <FaHome/><p>home</p>
                </NavLink>
                <NavLink exact 
                    to={{
                        pathname: `/app/myaccount`,
                        state: props.location.state
                    }}
                    activeClassName="control-nav-active" 
                >
                    <FaUserEdit/><p>my account</p>
                </NavLink>
            </nav>
        </header>

    )
}

export default Navbar;