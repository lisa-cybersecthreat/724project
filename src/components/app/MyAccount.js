/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../contexts/dataContext";
import { InitContext } from "../../contexts/initContext";

import "../../styles/MyAccount.scss"
import DelBox from "./DelBox";
import UpdateBox from "./UpdateBox";
import UpdatePWBox from "./UpdatePWBox";

function MyAccount (props) {
    const {             
        thisUser, setThisUser,
        runFetch, setRunFetch,
        remark, setRemark 
    } =useContext(DataContext)
    const { transactionUsersUrl } = useContext(InitContext);
    const { t, i18n } = useTranslation();
    const [isUpdateBtn, setIsUpdateBtn] = useState(false);
    const [isUpdatePWBtn, setIsUpdatePWBtn] = useState(false);
    const [ isDelBtn, setIsDelBtn ] = useState(false) 
    const [alert, setAlert] = useState("")

    const clickUpdateBtn = e => setIsUpdateBtn(!isUpdateBtn)
    const clickUpdatePWBtn = e => setIsUpdatePWBtn(!isUpdatePWBtn)
    const clickDelBtn = e => setIsDelBtn(!isDelBtn)
    const changeLang = e => i18n.changeLanguage(e.target.value)

    return(
        <>
            <main id="MyAccount">
                <h1>{t("my_account")}</h1>
                <section className="personal-info-div">
                    <h2>{t("personal_info")}</h2>
                    <ul>
                        <li>{t("userid")}: <span>{thisUser.userid}</span></li>
                        <li>{t("user_name")}: <span>{thisUser.username}</span></li>
                        <li>{t("birthday")}: <span>{thisUser.birthday}</span></li>
                        <li>{t("gender")}: <span>{thisUser.gender}</span></li>
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
                                        // transactionUsersUrl={transactionUsersUrl} 
                                        // alert={alert} 
                                        // setAlert={setAlert} 
                                        setIsUpdateBtn={setIsUpdateBtn}
                                        t={t}
                                        />}
                    {
                        isUpdatePWBtn && <UpdatePWBox
                                        thisUser={thisUser}
                                        // transactionUsersUrl={transactionUsersUrl}
                                        // alert={alert}
                                        // setAlert={setAlert}
                                        setIsUpdatePWBtn={setIsUpdatePWBtn}
                                        t={t}
                                        />
                    }
                    { 
                        isDelBtn && <DelBox
                                    thisUser={thisUser}
                                    // isDelBtn={isDelBtn}
                                    // clickDelBtn={clickDelBtn}
                                    // transactionUsersUrl={transactionUsersUrl}
                                    setIsDelBtn={setIsDelBtn}
                                    history={props.history}
                                    t={t}
                                    />
                    }
                </section>
                <section className="account-setting">
                    <h2>{t("account_details")}</h2>
                        <div className="lists">
                            <p>{t("membership")}:<span>{t(`TransactionUsers.${thisUser.usertype}`)}</span></p>
                            <p>{t("membership_status")}:<span>{t(`TransactionUsers.${thisUser.enabled}`)}</span></p> 
                            <label>{t("language")}:
                                <select  onChange={changeLang} defaultValue={i18n.language} >
                                    <option value="en">En</option>
                                    <option value="zh">文</option>
                                </select>  
                            </label>
                            <button onClick={clickDelBtn}>{t("delete_account")}</button>                    
                        </div>
                </section>
            </main>            
        </>
    )
}

export default MyAccount;