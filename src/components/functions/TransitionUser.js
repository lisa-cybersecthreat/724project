import { useContext } from "react"
import { InitContext } from "../../contexts/initContext"


const TransactionUsers = (action, value, userid) => {
    const {transactionUsersUrl } = useContext(InitContext)
    const []

    fetch(transactionUsersUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
            userid: userid,
            action: action
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if (data.result.toLowerCase().indexOf("ok")!==-1 || data.result.toLowerCase().indexOf("success")!==-1) {
            setAlert(data.result.toLowerCase())
            setRunFetch(!runFetch)
            setTimeout(()=>{
                props.setIsUpdateBtn(false);
            }, 1000)
        }
    })
    .catch(err=>console.error(err))
}