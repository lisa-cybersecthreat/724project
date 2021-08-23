import { createContext, useContext, useEffect } from 'react';
import { DataContext } from './dataContext';
import { InitContext } from './initContext';

export const FunctionContext = createContext();

export const FunctionProvider = props => {
    const {
        authUrl,
        transactionUsersUrl,
        transactionCheckURL,
        header_auth
    } = useContext(InitContext);
    const {
        thisUser, setThisUser,
        runFetch, setRunFetch,
        remark, setRemark,
    } = useContext(DataContext)

    function FetchTransactionCheckURL (action, value, remarkText, setToggle) {

        fetch(transactionUsersUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                ...value, 
                action: action
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setRemark({
                res: data.result.toLowerCase(),
                text: data.result.toLowerCase().indexOf("ok")!==-1 ? remarkText : alert
            })
            
            if (data.result.toLowerCase().indexOf("ok")!==-1) {
                setRunFetch(!runFetch)
                setToggle(false)
            }

            setTimeout(()=> {
                setRemark({
                    res: "",
                    text: ""
                })
            }, 2100)

        })
        .catch(err=>console.error(err))        
    }
        


    return(
        <FunctionContext.Provider value={{
            FetchTransactionCheckURL
        }}>
            { props.children }
        </FunctionContext.Provider>
    )
}