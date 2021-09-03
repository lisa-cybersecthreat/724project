/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../contexts/dataContext";
import { InitContext } from "../../contexts/initContext";
import { v4 as uuidv4 } from 'uuid';

import "../../styles/MyAccount.scss"
import DelBox from "./DelBox";
import EnableBox from "./EnableBox";
import ServicePackage from "./ServicePackage";
import UpdateBox from "./UpdateBox";
import UpdatePWBox from "./UpdatePWBox";

function MyAccount (props) {
    const {             
        thisUser, setThisUser,
        runFetch, setRunFetch,
        remark, setRemark,
        thisPackage, setThisPackage,
        packages, setPackages
    } =useContext(DataContext)
    const { 
        transactionUsersUrl,
        TransactionUserServicepackage,
        TransactionServicepackage,
        TransactionOrdermaster,
        TransactionOrderdetail
     } = useContext(InitContext);
    const { t, i18n } = useTranslation();
    const [isUpdateBtn, setIsUpdateBtn] = useState(false);
    const [isUpdatePWBtn, setIsUpdatePWBtn] = useState(false);
    const [ isDelBtn, setIsDelBtn ] = useState(false) 
    const [alert, setAlert] = useState("");
    const [selectedPackage, setSelectedPackage] = useState({})
    const [orderMaster, setOrderMaster] = useState([])
    const [isEnableBox, setIsEnableBox] = useState(false)
    // const accountSettingRef=useRef()

    const clickUpdateBtn = e => setIsUpdateBtn(!isUpdateBtn)
    const clickUpdatePWBtn = e => setIsUpdatePWBtn(!isUpdatePWBtn)
    const clickDelBtn = e => setIsDelBtn(!isDelBtn)
    const changeLang = e => i18n.changeLanguage(e.target.value)

    useEffect(()=>{
        fetch(TransactionOrdermaster, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                "action": "Query", 
                "userid": localStorage.getItem("userid")
            })            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setOrderMaster(data)
        })
        .catch(err=>console.error(err))
    }, [])

    const delPackages = elm => {
        fetch( TransactionUserServicepackage , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                action: "Delete",
                packageid: elm,
                userid: thisUser.userid
            })
        })
        .then(res=>res.json())
        .then(data=> {
            console.log("delete packages:")
            console.log(elm)
            console.log(data)
            window.location.reload()
        })
        .catch(err=>console.error(err))
    }

    const delOderMaster = elm => {
        fetch(TransactionOrdermaster, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                "action": "Delete",
                orderno: elm
            })            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            window.location.reload()
        })
        .catch(err=>console.error(err))
    }

    const clickEnableBtn = e => {
        setIsEnableBox(!isEnableBox)
    }

    const clickOrderDetail = e => {
        fetch(TransactionOrderdetail, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                action: "Query",
                orderno: "",
                packageid: ""
            }),      
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        .catch(err=>console.error(err))
    }

    return(
        <>
            <main id="MyAccount">
                <h1>{t("my_account")}</h1>
                <section className="personal-info-div">
                    <h2>{t("personal_info")}</h2>
                    <ul>
                        <li>{t("userid")}: <span>{thisUser.userid}</span></li>
                        <li>{t("user_name")}: <span>{thisUser.username}</span></li>
                        <li>{t("birthday")}: <span>{new Date(thisUser.birthday).toLocaleDateString()}</span></li>
                        <li>{t("gender")}: <span>{t(`${thisUser.gender}`)}</span></li>
                        <li>email: <span>{thisUser.email}</span></li>
                        <li>{t("company")}: <span>{thisUser.company}</span></li>
                        <li>{t("title")}: <span>{thisUser.title}</span></li>
                        <li>{t("tel")}: <span>{thisUser.telephone}</span></li>
                        <li>{t("mobile")}: <span>{thisUser.mobile}</span></li>
                        <li>{t("zipcode")}: <span>{thisUser.zipcode}</span></li>
                        <li>{t("address")}: <span>{thisUser.address}</span></li>
                        <button onClick={clickUpdateBtn}>{t("update_personal_info")}</button>
                        <button onClick={clickUpdatePWBtn}>{t("update_password")}</button>
                    </ul>
                    { isUpdateBtn && <UpdateBox 
                                        thisUser={thisUser} 
                                        setThisUser={setThisUser} 
                                        setIsUpdateBtn={setIsUpdateBtn}
                                        t={t}
                                        />}
                    { isUpdatePWBtn && <UpdatePWBox
                                        thisUser={thisUser}
                                        setIsUpdatePWBtn={setIsUpdatePWBtn}
                                        t={t}
                                        />}
                    { isDelBtn && <DelBox
                                    thisUser={thisUser}
                                    setIsDelBtn={setIsDelBtn}
                                    history={props.history}
                                    t={t}
                                    />}
                </section>
                <section className="account-setting">
                    <h2>{t("account_details")}</h2>
                        <div className="lists">
                            <p>
                                <span>{t("membership")}: </span>
                                <span>
                                    {t(`servicePackage.${thisPackage.packageid}`)}
                                    {
                                        (thisPackage.enabled==1&&thisPackage.packageid.indexOf("free")===-1) && `(${t("expire to")}: ${thisPackage.expiration.slice(0, 10)})`
                                     }
                                    <button><NavLink exact to="/app/store">{t("upgrade")}</NavLink></button>
                                </span>
                            </p>
                            {/* {
                                isUpgrade && <ServicePackage thisPackage={thisPackage} setIsUpgrade={setIsUpgrade} />
                            } */}
                            <p>
                                <span>{t("membership_status")}:</span>
                                <span>{thisPackage.enabled}{t(`servicePackage.enabled${thisPackage.enabled}`)}</span>
                                {
                                    thisPackage.enabled==0 && <button onClick={clickEnableBtn}>開通方案</button>
                                }
                            </p> 
                            <p>{t("language")}:
                                <select  onChange={changeLang} defaultValue={i18n.language} >
                                    <option value="en">En</option>
                                    <option value="zh">文</option>
                                </select>  
                            </p>
                            {/* <button onClick={clickDelBtn}>{t("delete_account")}</button>                     */}
                        </div>
                </section>
                <div>
                    { packages.length!==undefined &&
                        <div>
                            <h2>{t("purcahsed packages")} : packages: TransactionUserServicepackage</h2>
                            <div style={{display: "flex"}}>
                                {packages.map(pk=><ul style={{border: "1px solid olive"}} key={uuidv4()}>
                                        { Object.keys(pk).map((key, i) => <li key={uuidv4()}>{key}: {Object.values(pk)[i]}</li>)}
                                        <button onClick={()=>delPackages(pk.packageid)}>delete</button>
                                    </ul>)}                                
                            </div>


                        </div>                        
                    }
                    {
                        orderMaster.length>0 && <div>
                            <h2>{t("plan_details")}: orderMaste<button onClick={clickOrderDetail}>clickOrderDetail</button></h2>
                            <div style={{display: "flex"}}>
                            {
                                orderMaster.map((om, i)=><ul style={{border: "1px solid olive"}} key={uuidv4()}>
                                    {Object.keys(om).map((key, i)=><li key={uuidv4()}>{key}: {Object.values(om)[i]}</li>)}
                                    <button onClick={()=>delOderMaster(om.orderno)}>delete</button>
                                </ul>)
                            }        
                            </div>

                        </div>
                    }
                </div>
                {
                    isEnableBox && <EnableBox 
                                        t={t}
                                        thisPackage={thisPackage} 
                                        title={t(`servicePackage.${thisPackage.packageid}`)} 
                                        setIsEnableBox={setIsEnableBox} 
                                        TransactionUserServicepackage={TransactionUserServicepackage}
                                        />
                }
            </main>            
        </>
    )
}

export default MyAccount;