import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { InitContext } from "../../contexts/initContext";
import "../../styles/Register.scss";

import logo from "../../images/logo.png";
import { Redirect, NavLink } from "react-router-dom";
import Dashboard from "../app/Dashboard";
import PersaonalInfoInputs from "../others/PersonalInfoInputs";


function Register (props) {
    const { authUrl, transactionUsersUrl } = useContext(InitContext)
    const { t, i18n } = useTranslation();
    const [inputValue, setInputValue] = useState({      

    })
    const [alert, setAlert] = useState("")
    const [cityNo, setCityNo] = useState(0)

    const changeInput= e => {
        setInputValue({...inputValue, 
            [e.target.name] : e.target.value
        })
        setAlert("")
    }

    const onSubmit= (e) => {
        e.preventDefault();

        const data={...inputValue,  action : "Add"}
        console.log(data)


        fetch(transactionUsersUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setAlert(data.result.toLowerCase())

            if(data.result.toLowerCase().indexOf("ok")!==-1 || data.result.toLowerCase().indexOf("success")!==-1) {
                localStorage.setItem("userid", inputValue.userid)

                fetch(authUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "userid": inputValue.userid ,
                        "password" : inputValue.password,
                        "rememberme" : "1"
                    })
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    setAlert(data.result.toLowerCase())
                    if(data.result.toLowerCase().indexOf("ok") !== -1) {
                        localStorage.setItem("userid", inputValue.userid)
                        localStorage.setItem("token", data.token)
                        setTimeout(()=>{
                            props.history.push({
                                pathname: "/app",
                                state: data.token
                            })
                        }, 500)          
                    } 
                })
                .catch(err=>console.error(err))
            } 
        })
        .catch(err=>console.error(err))
    } 

    useEffect(()=>{
        console.log(props.history)
        fetch(transactionUsersUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfb…DA2fQ.nxlqiROi-COTgPHH4kEP9iEfnQ7rNMJeCHbKgbkvq4I"
            },
            body: JSON.stringify({
                "action" : "Query",  
                "userid": ""
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        .catch(err=>console.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <main id="Register">
            <div className="top-div">
                <NavLink exact to="/" ><img src={logo} alt="logo" /></NavLink>
                <p className="login">{t("have_account")}&nbsp;&nbsp;<NavLink exact to="/login">{t("login")}</NavLink></p>   
            </div>
            <form onSubmit={onSubmit}>
                <h2>{t("sign_up_free")}</h2>
                    <PersaonalInfoInputs changeInput={changeInput} inputValue={inputValue} t={t}/>
                    <label>
                        <input type="submit" value={t("register")} disabled={alert.length>0 ? true : false} />  
                    </label>
                    { alert.length>0 && <h1 className="alert" style={{background: alert.indexOf("ok")!==-1 || alert.indexOf("success")!==-1 ? "var(--green)": "var(--red)"}}>{alert}</h1>}
            </form>
        </main>
    )
}

export default Register;