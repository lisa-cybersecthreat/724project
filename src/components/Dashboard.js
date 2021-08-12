import React, { useContext, useEffect, useState } from "react";

import "../styles/Dashboard.scss"

import { AiOutlineGlobal } from "react-icons/ai"
import { InitContext } from "../contexts/initContext";

function Dashboard (props) {
    const { transactionCheckURL } = useContext(InitContext)
    const [thisUser, setThisUser] = useState(props.location.state[0]);
    const [isAction, setIsAction] = useState(false);
    const [alert, setAlert] = useState("")
    const [value, setValue] = useState({ 
        "action" : "Update",
        "usersseqno" : thisUser.seqno,
        "pageurl": "",
        // "pageurl": "https://www.104.com.tw/company/1a2x6bllid",
        // "noticemail": "ningsen.cheng1@cybersecthreat.com"    
        "noticemail": thisUser.email    
    }
  )

    const clickActionCard = e => setIsAction(!isAction)

    const changeInput = e => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log(value)

        fetch(transactionCheckURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(value)
        })
        // .then(res=>res.json())
        .then(res=>{
            console.log(res)
            return res.json()
        })
        .then(data=>{
            console.log(data)
            setAlert(data.result)
        })
        .catch(err => console.error(err))
    }
    

    return (
        <>
        {console.log("return")}
        <main id="Dashboard">
            <h1>Dashboard</h1>
            <p>welcome {thisUser.userid}</p>
            <p>{thisUser.email}</p>
            <p>seqno: <span>{thisUser.seqno}</span></p>
            <div className="action-card" onClick={clickActionCard}>
                <div className="top-div">
                    <AiOutlineGlobal/>
                    <h1>監控網頁內容</h1>
                </div>
                <p>可設定異動需要後端監控網頁內容的pageurl</p>
            </div>
            <div style={{display: isAction ? "block" : "none"}}>
                <form onSubmit={onSubmit}>
                    <input type="url" name="pageurl" value={value.pageurl} onChange={changeInput} required/>
                    <input type="submit" value="submit" />
                    <p>{alert}</p>
                    {
                        // alert.length>0 && <p style={{color: alert.toLowerCase().indexOf("ok")!==-1 ? "green" : "red" }}>{alert}</p>
                    }
                </form>
            </div>
        </main>
        </>
    )
}

export default Dashboard;