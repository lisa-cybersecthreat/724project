import "../../styles/MsgTemplate.scss";
import { AiFillCheckCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";


const EnableBox = (props) => {
    const [duration, setDuration] = useState({
        from: new Date().toISOString().slice(0, 10),
        to: ""
    })

    useEffect(()=> {

        var date=new Date(duration.from);
        date.setFullYear(date.getFullYear()+1)
        date.setDate(date.getDate()-1)
        setDuration({
            ...duration,
            to: date.toISOString().slice(0, 10)
        })   

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [duration.from])

    const changeInput = e => {
        console.log(e.target.value)
        setDuration({...duration, [e.target.name]: e.target.value})
    }

    const submitEnable = e => {
        e.preventDefault();
        console.log({
            userid: localStorage.getItem("userid"),
            packageid: props.thisPackage.packageid,
            enabled: 1, 
            expiration: duration.to,
        })

        fetch(props.TransactionUserServicepackage, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                action: "Update",
                userid: localStorage.getItem("userid"),
                packageid: props.thisPackage.packageid,
                enabled: 1, 
                expiration: duration.to
            })
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            window.location.reload();
            props.setIsEnableBox(false);
        })
        .catch(err => console.error(err))

        
    }

    return(
        <div className="overlay">
            <div className="box update-box">
            <form style={{width: "100%"}} onSubmit={submitEnable}>
                <div className="x-btn" onClick={()=>props.setIsEnableBox(false)}>X</div>
                    <h1>{props.title}</h1>
                    <p>開通日期: </p>
                    {/* <input type="date" name="from" placeholder="2021-09-09" value="2021-09-2" onChange={changeInput}/> */}
                    <input type="date" name="from" value={duration.from} onChange={changeInput}/>
                    <div>
                        <p>{props.t("valid from")}: {duration.from}</p>
                        <p>{props.t("expire to")} {duration.to} </p>                                        
                    </div>
                    <input type="submit"/>
                </form>      
            </div>
        </div>
    )
}

export default EnableBox;