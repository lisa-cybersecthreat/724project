import React, { useContext, useEffect, useState } from "react";

import { InitContext } from "../../contexts/initContext";
import "../../styles/Register.scss";

import logo from "../../images/logo.png";
import { Redirect } from "react-router-dom";
import Dashboard from "../Dashboard";


function Register (props) {
    const { transactionUsersUrl } = useContext(InitContext)
    const [inputValue, setInputValue] = useState({      

    })
    const [alert, setAlert] = useState("")
    const [cityNo, setCityNo] = useState(0)

    const changeInput= (e) => {
        setInputValue({...inputValue, 
            [e.target.name] : e.target.value
        })
    }

    // const changeCity=()=>{
    //     console.log(e.target.name)
    //     console.log(e.target.value)
    // }

    const onSubmit= (e) => {
        e.preventDefault();

        const data={...inputValue, action : "Add"}
        console.log(data)
        fetch(transactionUsersUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setAlert(data.result)

            if(data.result.toLowerCase()==="ok") {
                setTimeout(()=>{
                    props.history.push({
                        pathname: "/app",
                        state: data
                    })
                }, 1000)
            } 
        })
        .catch(err=>console.error(err))
        setTimeout(()=>{
            props.history.push("/app")
        }, 1000)

    } 

    useEffect(()=>{
        console.log(props.history)
        fetch(transactionUsersUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "action" : "Query",      
                // "userid": "123"
                "userid": ""
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        .catch(err=>console.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <main id="Register">
            <div className="top-div">
                <a href="/" className="logo"><img src={logo} alt="logo" /></a>
                <p className="login">Have an account??&nbsp;&nbsp;<a href="/login">Login</a></p>                
            </div>
            <form onSubmit={onSubmit}>
                <h2>Sign Up for free 30 days trial!</h2>
                <div className="input-div">
                    <label>
                        <p>user id<span>*</span></p>
                        {/* <input name="userid" type="text" placeholder="" value={inputValue.userid} onChange={changeInput} required /> */}
                        <input name="userid" type="text" placeholder="" onChange={changeInput} required />
                    </label>
                    <label>
                        <p>password<span>*</span></p>
                        {/* <input name="password" type="password" placeholder="" value={inputValue.password} onChange={changeInput} required /> */}
                        <input name="password" type="password" placeholder="" onChange={changeInput} required />
                    </label>
                    <label>
                        <p>company</p>
                        <input name="company" type="text" placeholder="" onChange={changeInput} />
                        {/* <input name="company" type="text" placeholder="" value={inputValue.company} onChange={changeInput} /> */}
                    </label>
                    <label>
                        <p>user name</p>
                        <input name="username" type="text" placeholder="" onChange={changeInput} />
                        {/* <input name="username" type="text" placeholder="" value={inputValue.username} onChange={changeInput} /> */}
                    </label>
                    <label>
                        <p>title</p>
                        <input name="title" type="text" placeholder="" onChange={changeInput} />
                        {/* <input name="title" type="text" placeholder="" value={inputValue.title} onChange={changeInput} /> */}
                    </label>
                    <label>
                        <p>email<span>*</span></p>
                        <input name="email" type="email" placeholder="" onChange={changeInput} required />
                        {/* <input name="email" type="email" placeholder="" value={inputValue.email} onChange={changeInput} required /> */}
                    </label>
                    <label>
                        <p>birthday</p>
                        <input name="birthday" type="date" placeholder="" onChange={changeInput} />
                        {/* <input name="birthday" type="date" placeholder="" value={inputValue.birthday} onChange={changeInput} /> */}
                    </label>
                    <label>
                        <p>gender</p>
                        <select name="gender" onChange={changeInput} defaultValue="">
                            <option value=""></option>
                            <option value="m">male</option>
                            <option value="f">female</option>
                        </select>                        
                    </label>
                    <label>
                        <p>telephone</p>
                        {/* <input name="telephone" type="tel" placeholder="" value={inputValue.telephone} onChange={changeInput} /> */}
                        <input name="telephone" type="tel" placeholder="" onChange={changeInput} />
                    </label>
                    <label>
                        <p>mobile</p>
                        {/* <input name="mobile" type="tel" placeholder="" value={inputValue.mobile} onChange={changeInput} />  */}
                        <input name="mobile" type="tel" placeholder="" onChange={changeInput} /> 
                    </label>
                    {/* <label>address
                        <select name="city" onChange={changeCity}>
                            {
                                cities.map((city, i)=><option value={city.CityName} key={i} >{city.CityName}</option>)
                            }
                        </select>
                        <select>
                            {
                                cities[cityNo].AreaList.map(area=><option>{`${area.ZipCode} ${area.AreaName}`}</option>)
                            }
                        </select>
                    </label> */}
                </div>
                    <div className="address-div">
                        <label><p>zipcode</p>
                            {/* <input name="zipcode" type="text" placeholder="" value={inputValue.zipcode} onChange={changeInput} /> */}
                            <input name="zipcode" type="text" placeholder="" value={inputValue.zipcode} onChange={changeInput} />
                        </label>
                        <label><p>address</p>
                            {/* <input name="address" type="text" placeholder="" value={inputValue.address} onChange={changeInput} />  */}
                            <input name="address" type="text" placeholder="" value={inputValue.address} onChange={changeInput} /> 
                        </label>              
                    </div>    
                    <label>
                        <input type="submit" value="sign up" />  
                    </label>


                    
                {/* <input type="submit" value="next" disabled={alert.indexOf("not")===-1 ? false : true} /> */}
                {
                   ( alert.length>0 ) && <h1 className="alert" style={{background: alert.indexOf("ok")>0? "var(--green)": "var(--red)"}}>{alert}</h1>
                }
            </form>
        </main>
    )
}

export default Register;