import { useContext, useState } from "react";
import { DataContext, DataProvider } from "../../contexts/dataContext";
import { FunctionContext } from "../../contexts/functionContext";

const UpdateBox = (props) => {
    const { 
        thisUser, setThisUser,
        runFetch, setRunFetch,
        remark, setRemark,
    } =useContext(DataContext);
    const { FetchTransactionUsersUrl } = useContext(FunctionContext)

    const [updateValue, setUpdateValue] = useState({
        userid: props.thisUser.userid
    });
    const [alert, setAlert] = useState("")

    const changeInput = e => {
        setUpdateValue({...updateValue, [e.target.name]: e.target.value==="" ? " " : e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();

        FetchTransactionUsersUrl("Update", updateValue, props.t("update_success"), props.setIsUpdateBtn)

        // fetch(props.transactionUsersUrl, {
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
        //     setRemark({
        //         res: data.result.toLowerCase(),
        //         text: data.result.toLowerCase().indexOf("ok")!==-1 ? props.t("update_success") : alert
        //     })
            
        //     if (data.result.toLowerCase().indexOf("ok")!==-1 ) {
        //         setRunFetch(!runFetch)
        //         props.setIsUpdateBtn(false);
        //     }
        // })
        // .catch(err=>console.error(err))

    }

    return(
        <div className="overlay update-box" id="UpdateBox">
            <form  onSubmit={onSubmit}>
                <div className="x-btn" onClick={()=>props.setIsUpdateBtn(false)}>X</div>
                <div className="personal-info-inputs">
                    <div className="input-div">
                        <label>
                            <p>{props.t("user_name")}</p>
                            <input name="username" type="text" defaultValue={props.thisUser.username} onChange={changeInput} />
                        </label>
                        <label>
                            <p>{props.t("company")}</p>
                            <input name="company" type="text"  defaultValue={props.thisUser.company} onChange={changeInput} />
                        </label>
                        <label>
                            <p>{props.t("title")}</p>
                            <input name="title" type="text"  defaultValue={props.thisUser.title} onChange={changeInput} />
                        </label>
                        <label>
                            <p>email<span></span></p>
                            <input name="email" type="email"  defaultValue={props.thisUser.email} onChange={changeInput} required />
                        </label>
                        <label>
                            <p>{props.t("birthday")}</p>
                            <input name="birthday" type="date"  defaultValue={props.thisUser.birthday} onChange={changeInput} />
                        </label>
                        <label>
                            <p>{props.t("gender")}</p>
                            <select name="gender"  defaultValue={props.thisUser.gender} onChange={changeInput} >
                                <option value=""></option>
                                <option value="m">{props.t("male")}</option>
                                <option value="f">{props.t("female")}</option>
                            </select>                        
                        </label>
                        <label>
                            <p>{props.t("tel")}</p>
                            <input name="telephone" type="tel" defaultValue={props.thisUser.telephone}  onChange={changeInput} pattern="^[0-9-+\s()]*$" />
                        </label>
                        <label>
                            <p>{props.t("mobile")}</p>
                            <input name="mobile" type="tel" defaultValue={props.thisUser.mobile} onChange={changeInput} pattern="^[0-9-+\s()]*$" /> 
                        </label>
                    </div>
                        <div className="address-div">
                            <label><p>{props.t("zipcode")}</p>
                                <input name="zipcode" type="text" defaultValue={props.thisUser.zipcode} onChange={changeInput} />
                            </label>
                            <label><p>{props.t("address")}</p>
                                <input name="address" type="text" defaultValue={props.thisUser.address} onChange={changeInput} /> 
                            </label>              
                        </div>    
                    </div>
                    <input type="submit" value={props.t("confirm")}/>
                    {/* {
                        alert.length>0 && <h1 style={{color: alert.indexOf("ok")!==-1 ? "var(--green)" : "var(--red)"}}>{alert.indexOf("ok")!==-1 ? props.t("update_success") : alert}</h1>
                    } */}
                </form>            
        </div>

    )
}

export default UpdateBox;
