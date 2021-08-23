/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import {
    NavLink,
    Link
} from "react-router-dom";
import { useTranslation } from "react-i18next"


import "../../styles/Nav.scss";
import logo from "../../images/logo.png";

import { FcManager } from "react-icons/fc";
import { FaHome, FaUserEdit } from "react-icons/fa"
import { InitContext } from "../../contexts/initContext";
import { DataContext } from "../../contexts/dataContext";

function Navbar (props) {
    const { transactionUsersUrl, header_auth } = useContext(InitContext);
    const {             
        thisUser, setThisUser,
        runFetch, setRunFetch,
        remark, setRemark } =useContext(DataContext);
    const { t, i18n } =useTranslation();
    const [isUserCard, setIsUserCard] = useState(false);

    // thisUser.userid===undefined && <h1>loading ...</h1>

    useEffect(()=>{
        localStorage.getItem("userid")===null && props.history.goBack()

        console.log(thisUser)
   
        fetch(transactionUsersUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                action: "Query",
                userid: localStorage.getItem("userid")
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setThisUser(data[0])
        })
        .catch(err=>console.error(err))

    }, [runFetch])

    const clickUserIcon = (e) => setIsUserCard(!isUserCard)

    const clickUserCard = (e) => setIsUserCard(false)

    const Logout = e => {
        localStorage.removeItem("userid")
        localStorage.removeItem("token")
    }

    return(
        <header className="app-header">
            {
                thisUser.userid===undefined ?                 
                <div className="loader-wrapper">
                    <div className="loader">Loading...</div>
                </div> :
                <>
                            <nav className="app-nav">
                <a href="/"><img src={logo} alt="logo" /></a>
                {/* <NavLink exact to="/" onClick={Logout} ><img src={logo} alt="logo"/></NavLink> */}
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
                                    // state: props.location.state
                                    state: props.thisUser
                                    }}>{t("my_account")}</Link>
                                    <a href="/">{t("logout")}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="control-nav">
                <NavLink exact 
                    to={{
                        pathname: `/app`,
                        // state: props.location.state
                        state: props.thisUser
                    }}
                    activeClassName="control-nav-active"
                >
                    <FaHome/><p>{t("home")}</p>
                </NavLink>
                <NavLink exact 
                    to={{
                        pathname: `/app/myaccount`,
                        // state: props.location.state
                        state: props.thisUser
                    }}
                    activeClassName="control-nav-active" 
                >
                    <FaUserEdit/><p>{t("my_account")}</p>
                </NavLink>
            </nav>
                </>
            }
            {
                console.log(remark.res === !remark.res)
            }
            {
                remark.res.length>0 && <h1 className="alert-box" style={{background: remark.res.indexOf("ok")===-1 && "var(--red)"}}>{remark.text}</h1>
            }
        
        </header>

    )
}

export default Navbar;