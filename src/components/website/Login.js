import React, { useContext, useState } from 'react'
import { InitContext } from '../../contexts/initContext';
import "../../styles/Login.scss";

function Login(props) {
    const { authUrl, transactionUsersUrl } = useContext(InitContext)
    const [inputValue, setInputValue] = useState({      
        userid: "",
        password: ""  
    })
    const [fetchData, setFetchData] = useState(null)
    const [alert, setAlert] = useState("")

    const changeInput= (e) => {
        setInputValue({...inputValue, 
            [e.target.name] : e.target.value
        })
        if (alert.length>0) setAlert("")
    }

    const onSubmit= (e) => {
        e.preventDefault();
        console.log(inputValue)

        // fetch(authUrl, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(inputValue)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     setAlert(data.result)
        //     if(data.result.toLowerCase()==="ok"){
        //         setTimeout(()=>{
        //             props.history.push({
        //                 pathname: "/app",
        //                 state: data
        //             })
        //         }, 1000)
        //     }
        // })
        // .catch(err=>console.error(err))
    }

    const clickUseridBtn=()=>{
        console.log('click userid button')

        fetch(transactionUsersUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                action : "Query", 
                userid : inputValue.userid,
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.length>0) {
                setFetchData(data)
            } else {
                setAlert("wrong userid")
            }
        })
        .catch(err=>console.error(err))

    }

    const checkPWBtn = () => {
        console.log(fetchData[0].password)
        if(inputValue.password!==fetchData[0].password){
            setAlert("worng password")
        } else {
            setAlert("Login Successfully")
            setTimeout(()=>{
                props.history.push({
                    pathname: "/app",
                    state: fetchData
                })
            }, 1000)
        }
    }

    return(
        <main id="Login">
            
            <form onSubmit={onSubmit}>
                <h2>Login</h2>
                { fetchData===null ? 
                    <>
                        <input name="userid" type="text" placeholder="user id" value={inputValue.userid} onChange={changeInput} required /> 
                        <input type="submit" value="next" onClick={clickUseridBtn} />
                    </>:
                    <>
                        <input name="password" type="password" placeholder="password" value={inputValue.password} onChange={changeInput} required />
                        <input type="submit" value="next" onClick={checkPWBtn} />
                    </>
                    
                }
                {
                   alert.length>0  && <h1 className="alert" style={{background: alert.toLowerCase().indexOf("ok")>0 || alert.toLowerCase().indexOf("success")>0? "var(--green)": "var(--red)"}}>{alert}</h1>
                }
                <a href="#">forget password??</a>
            </form>

            {/* <form onSubmit={onSubmit}>
                <h2>Login</h2>
                <input name="userid" type="text" placeholder="user id" value={inputValue.userid} onChange={changeInput} required />
                <input name="password" type="password" placeholder="password" value={inputValue.password} onChange={changeInput} required />
                <input type="submit" value="next" disabled={alert.indexOf("not")===-1 ? false : true} />
                {
                    alert.length>0  && <h1 className="alert" style={{background: alert.indexOf("ok")>0? "var(--green)": "var(--red)"}}>{alert}</h1>
                }
                <a href="#">forget password??</a>
            </form> */}
            
        </main>
    )
}

export default Login;