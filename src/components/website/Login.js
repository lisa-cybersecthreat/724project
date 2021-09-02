import React, { useContext, useState, useRef } from 'react'
import { InitContext } from '../../contexts/initContext';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../../styles/Login.scss";
import logo from "../../images/logo.png";
import { DataContext } from '../../contexts/dataContext';

function Login(props) {
    const { authUrl, transactionUsersUrl, header_auth } = useContext(InitContext)
    const {
        thisUser, setThisUser,
        runFetch, setRunFetch
    } = useContext(DataContext)
    const { t, i18n } = useTranslation();
    const [inputValue, setInputValue] = useState({      
        userid: "",
        password: ""  
    })
    // const [fetchData, setFetchData] = useState(null)
    const [alert, setAlert] = useState("")
    const submitbtnRef = useRef()

    const changeInput= (e) => {
        submitbtnRef.current.disabled=false;
        setInputValue({...inputValue, 
            [e.target.name] : e.target.value
        })
        if (alert.length>0) setAlert("")
    }

    const onSubmit= (e) => {
        e.preventDefault();
        submitbtnRef.current.disabled=true;

        fetch(authUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "userid": inputValue.userid ,
                "password" : inputValue.password
            })
        })
        .then(res=>res.json())
        .then(async data=>{
            console.log(data)
            setAlert(data.result.toLowerCase())
            if(data.result.toLowerCase().indexOf("ok") !== -1) {
                
                await localStorage.setItem("userid", inputValue.userid)
                await localStorage.setItem("token", data.token)

                setTimeout(()=>{
                    props.history.push({
                        pathname: "/app",
                        state: data.token
                        // state: fetchData
                    })
                }, 500)          
            } 
        })
        .catch(err=>console.error(err))
    }

    return(
        <main id="Login">
            <NavLink exact to="/" ><img src={logo} alt="logo" className="logo"/></NavLink>
            <form onSubmit={onSubmit}>
                <h2>{t("login")}</h2>
                <input name="userid" type="text" placeholder={t("userid")} value={inputValue.userid} onChange={changeInput} required autoFocus />
                <input name="password" type="password" placeholder={t("password")} value={inputValue.password} onChange={changeInput} required />
                <input type="submit" value={t("next")} disabled={alert.indexOf("not")===-1 ? false : true} ref={submitbtnRef} />
                {
                    // alert.length>0  && <h1 className="alert" style={{background: alert.toLowerCase().indexOf("success")>0 || alert.toLowerCase().indexOf("登入")>0? "var(--green)": "var(--red)"}}>{alert}</h1>
                    alert.length>0  && <h1 className="alert" style={{background: alert.indexOf("ok")!==-1 ? "var(--green)": "var(--red)"}}>{alert.indexOf("ok")!==-1 ? t("welcome") : t("userid_password_wrong")}</h1>
                }
                <a href="#">{t("forgot_password")}</a>
            </form>
        </main>
    )
}

export default Login;