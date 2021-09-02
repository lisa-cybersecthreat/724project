import { createContext, useContext, useState, useEffect } from "react";
import { InitContext } from "./initContext";

export const DataContext = createContext();

export const DataProvider = props => {
    const {
        authUrl,
        transactionUsersUrl,
        transactionCheckURL,
        header_auth,
        plans
    } = useContext(InitContext)
    const [thisUser, setThisUser] =useState({})
    const [thisPackage, setThisPackage] = useState(plans[0])
    const [ packages, setPackages] = useState([])
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
            thisPackage, setThisPackage,
            packages, setPackages
            // FetchTransactionCheckURL
        }}>
            {props.children}
        </DataContext.Provider>
    )
}