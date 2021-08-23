import React, { useContext, useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from 'uuid';

import "../../styles/Dashboard.scss"

import { AiFillAccountBook, AiOutlineGlobal } from "react-icons/ai"
import { InitContext } from "../../contexts/initContext"
import { DataContext } from "../../contexts/dataContext";
import UrlCard from "./UrlCard";

function Dashboard (props) {
    const { transactionCheckURL, header_auth } = useContext(InitContext);
    const {             
        thisUser, setThisUser,
        runFetch, setRunFetch,
        remark, setRemark } =useContext(DataContext)
    const { t, i18n } = useTranslation();
    const [ fetchUrls, setFetchUrls ] = useState(false)
    const [isAddUrlCard, setIsAddUrlCard] = useState(false);
    const [alert, setAlert] = useState("")
    const [inputValue, setInputValue] = useState({})
    const [allUrls, setAllUrls] = useState([])
    const submitBtnRef = useRef()

    const clickAddUrlBtn = e => setIsAddUrlCard(!isAddUrlCard)

    const changeInput = e => {
        setInputValue({...inputValue, [e.target.name]: e.target.value});
        submitBtnRef.current.disabled=false;
        setAlert("")
    }

    useEffect(()=>{
        setAlert("");
        setInputValue({noticemail: thisUser.email})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAddUrlCard])

    useEffect(()=>{
        console.log(localStorage.getItem("token"))

        if(thisUser.seqno===undefined) return
        fetch(transactionCheckURL, {
            method: "POST",
            // headers: header_auth,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                "action": "Query",
                "usersseqno": thisUser.seqno,
                "pageurl": "",
                "noticemail": thisUser.email
                // "action": "Query",
                // "usersseqno": 9,
                // "pageurl": "",
                // "noticemail": "ningsen.cheng@cybersecthreat.com"
            })
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setAllUrls(data)
        })
        .catch(err => console.error(err))


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [thisUser, fetchUrls])

    const onSubmit = e => {
        e.preventDefault()
        submitBtnRef.current.disabled=true;

        fetch(transactionCheckURL, {
            method: "POST",
            // headers: header_auth,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                "action" : "Add",
                "usersseqno" : thisUser.seqno,
                "pageurl": inputValue.pageurl,
                "noticemail": thisUser.email  
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setAlert(data.result.toLowerCase())
            setFetchUrls(!fetchUrls)
            setIsAddUrlCard(false)
        })
        .catch(err => console.error(err))
    }

    return (
        <>
        <main id="Dashboard">
            <h1>{t("welcome")}<span>{thisUser.userid}</span></h1>
            <section>
                <p>email: {thisUser.email}</p>
                <p>seqno: <span>{thisUser.seqno}</span></p>
                <p>usersseqno: <span>{thisUser.usersseqno}</span></p>
                <div className="action-card">
                    <div className="top-div">
                        <AiOutlineGlobal/>
                        <h1>{t("monitor_web_content.title")}</h1>
                    </div>
                    <p>{t("monitor_web_content.text")}</p>
                    <button onClick={clickAddUrlBtn} >{t("add")} url</button>    
                    <div className="url-cards-div">
                        {
                            allUrls.length>0 &&
                            allUrls.map(url=> <UrlCard 
                                                url={url} 
                                                key={uuidv4()} 
                                                t={t} 
                                                header_auth={header_auth}
                                                fetchUrls={fetchUrls}
                                                setFetchUrls={setFetchUrls}
                                                 />)
                        }                        
                    </div>

                    
                </div>
                <div style={{display: isAddUrlCard ? "flex" : "none"}} className="overlay update-box">
                    <form onSubmit={onSubmit}>
                    <div className="x-btn" onClick={()=>setIsAddUrlCard(false)}>X</div>
                        <label>url:*
                            <input type="url" name="pageurl" value={inputValue.pageurl===undefined ? "" : inputValue.pageurl} onChange={changeInput} required/>
                        </label>
                        <label>{t("notice")} email:
                            <input type="email" name="noticemail" value={inputValue.noticemail===undefined ? "" : inputValue.noticemail } onChange={changeInput}/>
                        </label>
                        <input type="submit" value={t("add")} ref={submitBtnRef} />
                        {
                            alert.length>0 && <p style={{color: alert.toLowerCase().indexOf("ok")!==-1 ? "green" : "red" }}>{t(`add_success`)}</p>
                        }
                    </form>
                </div>  
                         
            </section>
        </main>
        </>
    )
}

export default Dashboard;