import { useRef, useState, useContext } from "react";
import { FunctionContext } from "../../contexts/functionContext";

function DelBox(props) {
    const { FetchTransactionCheckURL } = useContext(FunctionContext)
    const submitRef=useRef()
    const [ alert, setAlert ] = useState("")

    const changeInput = e => {
        if(e.target.value===props.thisUser.userid) {
            submitRef.current.disabled=false;
        } else {
            submitRef.current.disabled=true;
        }
    }

    const onSubmit = async e => {
        e.preventDefault();

        await FetchTransactionCheckURL("Delete", {userid: props.thisUser.userid}, props.t("update_success"), props.setIsDelBtn )

        props.history.push("/");   

        // fetch(props.transactionUsersUrl, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         'Authorization': `Bearer ${localStorage.getItem("token")}`
        //     },
        //     body: JSON.stringify({
        //         action : "Delete",
        //         userid: props.thisUser.userid, 
        //     })
        // })
        // .then(res=> res.json())
        // .then(data=>{
        //     console.log(data)
        //     setAlert(data.result)
        //     props.setRemark({
        //         res: data.result.toLowerCase(),
        //         text: data.result.toLowerCase().indexOf("ok")!==-1 ? props.t("update_success") : alert
        //     })

        //     if(data.result.toLowerCase().indexOf("ok") !== -1 ) {
        //         localStorage.removeItem("userid")
        //         props.setIsDelBtn(false);
        //         props.history.push("/")   
        //     }
        // })
        // .catch(err => console.error(err))
    }

    return(
        <div id="DelBox" className="overlay delete-box">
            <div className="box">
                {/* <div className="top">
                    <h1>Are you absolutely sure?</h1> 
                    <button className="x-btn" onClick={()=>props.setIsDelBtn(false)}>X</button>                           
                </div>
                <form className="bottom" onSubmit={onSubmit}>
                    <p>This will permanently delete the <span>{props.thisUser.userid}</span> account.</p>
                    <p>Once you delete this account, there is no going back. Please be certain.</p>
                    <p>Please type <span>{props.thisUser.userid}</span> to confirm.</p>
                    <input type="text" name="confirm-text" onChange={changeInput} required/>
                    <input type="submit" value="delete this account" ref={submitRef} disabled/>         
                    {
                        alert.length>0 && <h1 style={{color: alert.indexOf("ok")!==-1 ? "var(--green)" : "var(--red)"}}>{alert.indexOf("ok")!==-1 ? props.t("update_success") : alert}</h1>
                    }                   
                </form> */}
                <div className="top">
                    <h1>{props.t("delete_box.title")}</h1> 
                    <button className="x-btn" onClick={()=>props.setIsDelBtn(false)}>X</button>                           
                </div>
                <form className="bottom" onSubmit={onSubmit}>
                    <p>{props.t("delete_box.p1")}<span style={{color: "var(--red)"}}>{props.thisUser.userid}</span> {props.t("account")}.</p>
                    <p>{props.t("delete_box.p2")}.</p>
                    <p>{props.t("delete_box.p3")}<span style={{color: "var(--red)"}}>{props.thisUser.userid}</span>{props.t("delete_box.p4")}</p>
                    <input type="text" name="confirm-text" onChange={changeInput} required/>
                    <input type="submit" value={props.t("delete_box.btn")} ref={submitRef} disabled/>         
                    {
                        alert.length>0 && <h1 style={{color: alert.indexOf("ok")!==-1 ? "var(--green)" : "var(--red)"}}>{alert.indexOf("ok")!==-1 ? props.t("update_success") : alert}</h1>
                    }                   
                </form>
            </div>
        </div>
    )
}

export default DelBox;