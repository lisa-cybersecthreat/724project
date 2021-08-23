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
                        // state: fetchData
                    })
                }, 500)          
            } 
        })
        .catch(err=>console.error(err))
    }

    // const clickUseridBtn= e =>{
    //     if(inputValue.userid.length<1) return
    //     console.log('click userid button')
    //     console.log(e)
    //     e.target.disabled=true

    //     fetch(transactionUsersUrl, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             action : "Query", 
    //             userid : inputValue.userid,
    //         })
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         if(data.length>0) {
    //             setFetchData(data);
    //             e.target.disabled=false;
    //         } else {
    //             setAlert(t("wrong_userid"))
    //         }
    //     })
    //     .catch(err=>console.error(err))
    // }
    // const checkPWBtn = () => {
    //     if(inputValue.password.length<1) return

    //     if(inputValue.password!==fetchData[0].password){
    //         setAlert(t("wrong_password"))
    //     } else {
    //         setAlert(t("login_success"))
    //         // localStorage.setItem("value", JSON.stringify(inputValue))
    //         localStorage.setItem("userid", inputValue.userid)
    //         setTimeout(()=>{
    //             props.history.push({
    //                 pathname: "/app",
    //                 // state: fetchData
    //             })
    //         }, 500)
    //     }
    // }

    return(
        <main id="Login">
            <NavLink exact to="/" ><img src={logo} alt="logo" className="logo"/></NavLink>
            {/* <form onSubmit={onSubmit}>
                <h2>{t("login")}</h2>
                { fetchData===null ? 
                    <>
                        <input name="userid" type="text" placeholder={t("userid")} value={inputValue.userid} onChange={changeInput} required /> 
                        <input type="submit" value={t("next")} onClick={clickUseridBtn} disabled={alert.length>0 ? true : false} />
                    </>:
                    <>
                        <input name="password" type={t("password")} placeholder="password" value={inputValue.password} onChange={changeInput} required />
                        <input type="submit" value={t("next")} onClick={checkPWBtn} disabled={alert.length>0 ? true : false} />
                    </>
                }
                {
                   alert.length>0  && <h1 className="alert" style={{background: alert.toLowerCase().indexOf("success")>0 || alert.toLowerCase().indexOf("成功")>0? "var(--green)": "var(--red)"}}>{alert}</h1>
                }
                <a href="#">{t("forgot_password")}</a>
            </form> */}

            <form onSubmit={onSubmit}>
                <h2>{t("login")}</h2>
                <input name="userid" type="text" placeholder={t("userid")} value={inputValue.userid} onChange={changeInput} required />
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