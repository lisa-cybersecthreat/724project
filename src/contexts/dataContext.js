import { createContext, useContext, useState } from "react";
import { InitContext } from "./initContext";

export const DataContext = createContext();

export const DataProvider = props => {
    const {
        authUrl,
        transactionUsersUrl,
        transactionCheckURL,
        header_auth
    } = useContext(InitContext)
    const [thisUser, setThisUser] =useState({})
    const [runFetch, setRunFetch] = useState(false);
    const [remark, setRemark] = useState({
        res: "",
        text: ""
    })

    return(
        <DataContext.Provider value={{
            thisUser, setThisUser,
            runFetch, setRunFetch,
            remark, setRemark,
            // FetchTransactionCheckURL
        }}>
            {props.children}
        </DataContext.Provider>
    )
}