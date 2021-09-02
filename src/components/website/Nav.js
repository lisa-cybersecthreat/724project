import React, { useContext, useEffect } from "react";
import {
    NavLink
} from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../styles/Nav.scss";
import logo from "../../images/logo.png";
import { DataContext } from "../../contexts/dataContext";

function Nav (props) {
    const { t, i18n } = useTranslation();
    const { setThisUser, setThisPackage} = useContext(DataContext)

    const changeLang = e => i18n.changeLanguage(e.target.value)

    useEffect(()=> {
        console.log("run App useEffect")
        console.log("localStorge userid: "+ localStorage.getItem("userid"))
        // if(window.location.hash.indexOf("app")===-1) {
            console.log("not /app path, return, do not fetch")
            localStorage.removeItem("userid")
            localStorage.removeItem("token")
            setThisUser({})
            setThisPackage({})
            // return
        // } 
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return(
        <nav>
            <a href="/"><img src={logo} alt="logo" /></a>
            <div className="menu">
                <NavLink exact to="/" activeClassName="active-link">
                    {t("home")}
                </NavLink>
                <NavLink exact to="/pricing" activeClassName="active-link">
                    {t("price_n_plan")}
                </NavLink>
                <NavLink exact to="/login" activeClassName="active-link">
                    {t("login")}
                </NavLink>
                <NavLink exact to="/register" activeClassName="active-link">
                    {t("register")}
                </NavLink>
                <select  onChange={changeLang} defaultValue={i18n.language} >
                    <option value="en">En</option>
                    <option value="zh">文</option>
                </select>
            </div>
        </nav>
    )
}

export default Nav;