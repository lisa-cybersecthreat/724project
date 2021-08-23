import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../contexts/dataContext";
import { FunctionContext } from "../../contexts/functionContext";

const UpdatePWBox = (props) => {
    const { runFetch, setRunFetch, setRemark } =useContext(DataContext);
    const { FetchTransactionCheckURL } = useContext(FunctionContext);
    const [updateValue, setUpdateValue] = useState({userid: props.thisUser.userid})
    // const [alert, setAlert] = useState("")
    const confirmbtnRef = useRef()

    const changeInput = e => {
        setUpdateValue({...updateValue, [e.target.name]: e.target.value})
        // setAlert("");
        setRemark({
            res: "",
            text: ""
        })
        confirmbtnRef.current.disabled=false;
    }

    const onSubmit = e => {
        e.preventDefault();
        confirmbtnRef.current.disabled=true;
        console.log(updateValue)
        console.log(props.thisUser.password)
        console.log(updateValue.password)
        console.log(updateValue.confirm_password)

        if(updateValue.password!==updateValue.confirm_password) {
            // setAlert("password not match");
            setRemark({
                res: "password not match",
                text: props.t("password_not_match")
            })
            return
        } else {
            console.log("match")
            
            FetchTransactionCheckURL("Update", updateValue, props.t("update_success"), props.setIsUpdatePWBtn )
            // fetch(transactionUsersUrl, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         'Authorization': `Bearer ${localStorage.getItem("token")}`
            //     },
            //     body: JSON.stringify({
            //         ...updateValue, 
            //         action: "Update"
            //     })
            // })
            // .then(res=>res.json())
            // .then(data=>{
            //     console.log(data)
            //     setAlert(data.result.toLowerCase())
            //     props.setRemark({
            //         res: data.result.toLowerCase(),
            //         text: data.result.toLowerCase().indexOf("ok")!==-1 ? props.t("update_success") : alert
            //     })

            //     if (data.result.toLowerCase().indexOf("ok")!==-1 ) {
            //         setRunFetch(!runFetch)
            //         props.setIsUpdatePWBtn(false)
            //     }
            // })
            // .catch(err=>console.error(err))


        }

    }

    return(
        <div className="overlay update-box" id="UpdatePWBox">
            <form  onSubmit={onSubmit}>
                <div className="x-btn" onClick={()=>props.setIsUpdatePWBtn(false)}>X</div>
                    <div className="input-div">
                        <label>
                            <p>{props.t("new_password")}<span>*</span></p>
                            <input name="password" type="password" onChange={changeInput} required />
                        </label>
                        <label>
                            <p>{props.t("confirm_password")}<span>*</span></p>
                            <input name="confirm_password" type="password" onChange={changeInput} required />
                        </label>
                    </div>
                    <input type="submit" value={props.t("confirm")} ref={confirmbtnRef}/>
                </form>            
        </div>

    )
}

export default UpdatePWBox;