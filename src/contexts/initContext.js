import React, { createContext, useState } from 'react';

export const InitContext = createContext()

export const InitProvider = (props) => {
    const [authUrl] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/UserAuthentication");
    const [transactionUsersUrl] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/TransactionUsers");
    const [transactionCheckURL] = useState("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/TransactionCheckURL")

    return(
        <InitContext.Provider value={{
            authUrl,
            transactionUsersUrl,
            transactionCheckURL
        }}>
            {props.children}
        </InitContext.Provider>
    )
}