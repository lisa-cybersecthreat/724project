import { useState, useRef, useContext, useEffect } from "react";
import { DataContext } from "../../contexts/dataContext";
import { InitContext } from "../../contexts/initContext";


function UrlCard (props) {
    const { 
        transactionCheckURL,
        QueryCheckURL_His 
    } = useContext(InitContext);
    const [isUpdateCard, setIsUpdateCard] = useState(false)
    const [isDeleteCard, setIsDeleteCard] = useState(false);
    const [isCheckCard, setIsCheckCard] =useState(false)
    const [inputValue, setInputValue] = useState({})
    const [alert, setAlert] = useState("")
    const updateBtnRef = useRef()
    const deletBtnRef = useRef()
    const checkBtnRef = useRef()
    const [date, setDate] = useState({
        today: new Date().toISOString().slice(0, 10),
        startcheckdatetime: new Date(new Date().setDate(new Date().getDate()-1)).toISOString().slice(0, 10),
        endcheckdatetime: new Date().toISOString().slice(0, 10)
    })

    useEffect(()=>{
        setAlert("");
        setInputValue({})
        deletBtnRef.current.disabled=true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUpdateCard, isDeleteCard])

    const changeInput = e => {
        if(e.target.value===props.url.pageurl) deletBtnRef.current.disabled=false;
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }

    const changeDateInput = e => {
        console.log(e)
        console.log("change date input")
        console.log(e.target.value)
        setDate({...date, [e.target.name]: e.target.value})
    }

    const submitUpdate = e => {
        e.preventDefault();
        updateBtnRef.current.disabled=true;
        
        fetch(transactionCheckURL, {
            method: "POST",
            headers: props.header_auth,
            body: JSON.stringify({
                "action" : "Update",
                "usersseqno" : props.url.usersseqno,
                "pageurl": props.url.pageurl,
                "noticemail": inputValue.noticemail    
                })
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setAlert(data.result.toLowerCase())
                props.setFetchUrls(!props.fetchUrls)
            })
            .catch(err => console.error(err))
    }

    const submitDelete = e => {
        e.preventDefault()

        // deletBtnRef.current.disabled=true;

        fetch(props.transactionCheckURL, {
            method: "POST",
            // headers: props.header_auth,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                "action" : "Delete",
                "usersseqno" : props.url.usersseqno,
                "pageurl": props.url.pageurl,
                })
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setAlert(data.result.toLowerCase())
                props.setFetchUrls(!props.fetchUrls)
            })
            .catch(err => console.error(err))
    }

    const submitCheck = e => {
        e.preventDefault()
        
        fetch(QueryCheckURL_His, {
            method: "POST", 
            // headers: props.header_auth,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: {
                // action: "Query",
                // usersseqno: props.url.usersseqno,
                // pageurl: props.url.pageurl,
                // startcheckdatetime: date.startcheckdatetime,
                // endcheckdatetime: date.endcheckdatetime
                "action": "Query",
                "usersseqno": "27",   
                "pageurl": "",    
                "startcheckdatetime":  "2021-08-03",  
                "endcheckdatetime":  "2021-08-23",  
            }
        })
        .then(res => res.json())
        .then( data => console.log(data))
        .catch(err => console.error(err))
    }

    return(
        <div id="UrlCard">
            <ul className="info-div">
                <li>usersseqno: <span>{props.url.usersseqno}</span></li>  
                <li>seqno: <span>{props.url.seqno}</span></li>
                <li>pageurl: <span>{props.url.pageurl}</span></li>
                <li>noticemail: <span>{props.url.noticemail}</span></li>
                <li>createdatetime:<span>{props.url.createdatetime.toLocaleString()}</span></li>
                <li>updatedatetime:<span>{props.url.updatedatetime}</span></li>
                <li>lastcheckdatetime: <span>{props.url.lastcheckdatetime}</span></li>
            </ul>    
            <section className="check-section">
                <form onSubmit={submitCheck}>
                    <label>startcheckdatetime
                        <input 
                            type="date" 
                            name="startcheckdatetime" 
                            defaultValue={date.startcheckdatetime} 
                            onChange={changeDateInput} 
                            max={date.endcheckdatetime}
                            required />
                    </label>
                    <label>endcheckdatetime 
                        <input 
                            type="date" 
                            name="endcheckdatetime" 
                            defaultValue={date.endcheckdatetime} 
                            onChange={changeDateInput} 
                            min={date.startcheckdatetime}
                            max={date.today}
                            required />
                    </label>
                    <input type="submit" value={`${props.t("check")} url`} ref={checkBtnRef}/>    
                    <h1 style={{color: alert.indexOf("ok")!==-1 ? "var(--green)" : "var(--red)" }}>{alert.indexOf("ok")!==-1 ? props.t("delete") : alert}</h1>                          
                </form>
            </section>
            <div className="btn-div">
                <button onClick={()=>setIsUpdateCard(!isUpdateCard)}>{props.t("update")}</button>
                <button onClick={()=>setIsDeleteCard(!isDeleteCard)}>{props.t("delete")}</button>
                {/* <button onClick={()=>setIsCheckCard(!isCheckCard)}>{props.t("check")}</button> */}
            </div>
            <div className="update-box overlay" style={{display: isUpdateCard ? "flex" : "none"}}>
                <div>
                    <form onSubmit={submitUpdate}>
                    <div className="x-btn" onClick={()=>setIsUpdateCard(false)}>X</div>
                    <h1>{props.t("update")}</h1>
                    <li>pageurl: <span>{props.url.pageurl}</span></li>
                        <label>{props.t("notice")} email: 
                            <input type="email" name="noticemail" value={inputValue.noticemail===undefined ? "" : inputValue.noticemail} onChange={changeInput} required/>
                        </label>
                        <input type="submit" value={props.t("confirm")} ref={updateBtnRef} />
                        <h1 style={{color: alert.indexOf("ok")!==-1 ? "var(--green)" : "var(--red)" }}>{alert.indexOf("ok")!==-1 ? props.t("update_success") : alert}</h1>
                    </form>                    
                </div>

            </div>    
            <div className="DeleteCard overlay delete-box" style={{display: isDeleteCard ? "flex" : "none"}} >
                    <div className="box">
                        <div className="top">
                            <h1>{props.t("delete")} url ?</h1> 
                            <button className="x-btn" onClick={()=>setIsDeleteCard(false)}>X</button>                           
                        </div>
                        <form className="bottom" onSubmit={submitDelete}>
                            <p>{props.t("delete_box.p1")}<span>{props.url.pageurl}</span>.</p>
                            <p>{props.t("delete_box.p2")}</p>
                            <p>{props.t("delete_box.p3")} <span>{props.url.pageurl}</span> {props.t("confirm")}</p>
                            <input type="text" name="pageurl" value={inputValue.pageurl===undefined ? "" : inputValue.pageurl} onChange={changeInput} required/>
                            <input type="submit" value={`${props.t("delete")} url`} ref={deletBtnRef} disabled/>    
                            <h1 style={{color: alert.indexOf("ok")!==-1 ? "var(--green)" : "var(--red)" }}>{alert.indexOf("ok")!==-1 ? props.t("delete") : alert}</h1>                          
                        </form>
                    </div>
            </div>  
            <div className="DeleteCard overlay delete-box" style={{display: isCheckCard ? "flex" : "none"}} >
                    <div className="box">
                        <div className="top">
                            <h1>{props.t("check")} url</h1> 
                            <button className="x-btn" onClick={()=>setIsCheckCard(false)}>X</button>                           
                        </div>
                        <form className="bottom" onSubmit={submitCheck}>
                            <label>startcheckdatetime
                                <input 
                                    type="date" 
                                    name="startcheckdatetime" 
                                    defaultValue={date.startcheckdatetime} 
                                    onChange={changeDateInput} 
                                    max={date.endcheckdatetime}
                                    required />
                            </label>
                            <label>endcheckdatetime 
                                <input 
                                    type="date" 
                                    name="endcheckdatetime" 
                                    defaultValue={date.endcheckdatetime} 
                                    onChange={changeDateInput} 
                                    min={date.startcheckdatetime}
                                    max={date.today}
                                    required />
                            </label>
                            <input type="submit" value={`${props.t("check")} url`} ref={checkBtnRef}/>    
                            <h1 style={{color: alert.indexOf("ok")!==-1 ? "var(--green)" : "var(--red)" }}>{alert.indexOf("ok")!==-1 ? props.t("delete") : alert}</h1>                          
                        </form>
                    </div>
            </div>   
        </div>

    )
}

export default UrlCard;