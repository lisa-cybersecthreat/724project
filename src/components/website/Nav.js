import React, { useContext, useEffect } from "react";
import {
    NavLink
} from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../styles/Nav.scss";
import logo from "../../images/logo.png";

function Nav (props) {
    const { t, i18n } = useTranslation();

    const changeLang = e => i18n.changeLanguage(e.target.value)

    return(
        <nav>
            <a href="/"><img src={logo} alt="logo" /></a>
            <div className="menu">
                <NavLink exact to="/" activeClassName="active-link">
                    {t("home")}
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