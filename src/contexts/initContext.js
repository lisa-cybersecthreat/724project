import React, { createContext, useState } from 'react';

export const InitContext = createContext()

export const InitProvider = props => {
    const [authUrl] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/UserAuthentication");
    const [transactionUsersUrl] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/TransactionUsers");
    const [transactionCheckURL] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/TransactionCheckURL");
    const [QueryCheckURL_His] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/QueryCheckURL_His");
    const [header_auth] = useState({
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`
        // 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEyIiwicm9sZSI6ImZyZWUiLCJuYmYiOjE2Mjk0MjU0ODcsImV4cCI6MTYyOTQzMjY4NywiaWF0IjoxNjI5NDI1NDg3fQ.tmHmaou1-KQtncsI-XJfZwo6b_pwJyRhLMRjbH5rlxc`
    })


    return(
        <InitContext.Provider value={{
            authUrl,
            transactionUsersUrl,
            transactionCheckURL,
            QueryCheckURL_His,
            header_auth
        }}>
            {props.children}
        </InitContext.Provider>
    )
}