import React, { createContext, useState } from 'react';

export const InitContext = createContext()

export const InitProvider = props => {
    const [authUrl] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/UserAuthentication");
    const [transactionUsersUrl] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/TransactionUsers");
    const [transactionCheckURL] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/TransactionCheckURL");
    const [QueryCheckURL_His] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/QueryCheckURL_His");
    const [TransactionServicepackage] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/TransactionServicepackage")
    const [TransactionUserServicepackage] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/TransactionUserServicepackage")
    const [TransactionOrdermaster] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/TransactionOrdermaster")
    const [TransactionOrderdetail] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/TransactionOrderdetail");
    const [header_auth] = useState({
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
    const [plans, setPlans] = useState([
        {
            "seqno": 2,
            "packageid": "freepackage01",
            "packagetype": "basic",
            "packagename_cht": "基本免費方案",
            "packagename_en": "Free Package",
            "description": "Free Package 01",
            "price": 0,
            "enabled":  1,
            "createuserid": "admin",
            "createdatetime": "2021-08-13T09:36:53",
            "updateuserid": "admin",
            "updatedatetime": "2021-08-13T09:36:53"
        },
        {
            "seqno": 3,
            "packageid": "package01",
            "packagetype": "basic",
            "packagename_cht": "基本收費方案 01",
            "packagename_en": "paid Package 01",
            "description": "paid Package 01",
            "price": 1000,
            "enabled":  0,
            "createuserid": "admin",
            "createdatetime": "2021-08-16T02:43:22",
            "updateuserid": "admin",
            "updatedatetime": "2021-08-16T02:43:22"
        },
        {
            "seqno": 8,
            "packageid": "advance",
            "packagetype": "advance",
            "packagename_cht": "進階版方案",
            "packagename_en": "advanced Package",
            "description": "advanced plan for only 5000 per month",
            "price": 2000,
            "enabled":  0,
            "createuserid": "new",
            "createdatetime": "2021-08-26T07:23:01",
            "updateuserid": "new",
            "updatedatetime": "2021-08-26T07:26:12"
        },
        {
            "seqno": 6,
            "packageid": "vip",
            "packagetype": "vip",
            "packagename_cht": "vip方案",
            "packagename_en": "vip Package",
            "description": "vip",
            "price": 3000,
            "enabled":  0,
            "createuserid": "new",
            "createdatetime": "2021-08-25T02:02:44",
            "updateuserid": "new",
            "updatedatetime": "2021-08-25T02:02:44"
        },
        {
            "seqno": 7,
            "packageid": "customerize",
            "packagetype": "customerize",
            "packagename_cht": "客製化方案",
            "packagename_en": "customerize Package",
            "description": "customerize plan",
            "price": 5000,
            "enabled":  0,
            "createuserid": "new",
            "createdatetime": "2021-08-26T07:20:19",
            "updateuserid": "new",
            "updatedatetime": "2021-08-26T07:20:19"
        }
    ])


    return(
        <InitContext.Provider value={{
            authUrl,
            transactionUsersUrl,
            transactionCheckURL,
            QueryCheckURL_His,
            header_auth,
            TransactionServicepackage,
            TransactionUserServicepackage,
            TransactionOrderdetail,
            plans,
            TransactionOrdermaster
        }}>
            {props.children}
        </InitContext.Provider>
    )
}