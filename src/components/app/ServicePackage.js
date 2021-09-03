import { useContext, useEffect, useState, useRef, createRef } from "react";
import { InitContext } from "../../contexts/initContext";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from 'uuid';
import { FaCheck, FaExclamation } from "react-icons/fa";
import { BsPencil} from "react-icons/bs";

import PriceCard from "../website/PriceCard";
import "../../styles/ServicePackage.scss"
import { DataContext } from "../../contexts/dataContext";
import MsgTemplate from "./MsgTemplate";

function ServicePackage(props) {
    const { 
        TransactionServicepackage,
        TransactionUserServicepackage,
        TransactionOrdermaster,
        plans
    } = useContext(InitContext);
    const { 
        thisUser, thisPackage,
        remark, setRemark,
        runFetch, setRunFetch,
        packages, setPackages
    } = useContext(DataContext)
    const { t, i18n } = useTranslation();
    const [selectedPlan, setSelectedPlan]=useState({packageid: ""})
    const [isPriceCardDiv, setIsPriceCardDiv] = useState(false) 
    const [step, setStep] = useState(1)
    const [totalAmount, setTotalAmount] = useState(0)
    const formRef = useRef()
    const [msg, setMsg] = useState(null)
    const [duration, setDuration] = useState({
        enabled: "1",
        from:"2",
        to: ""
    })
    const addressCheckboxRef = useRef();
    const taxAddressRef = useRef();
    const shippingAddressRef = useRef();
    const [ orderMasterObj, setOrderMasterObj] = useState({})

    useEffect(()=>{
        console.log("setDuration")
        var date=new Date();
        date.setFullYear(date.getFullYear()+1)
        date.setDate(date.getDate()-1)
        duration.enabled === "1" ?
        setDuration({
            ...duration,
            from: new Date().toISOString(),
            to: date.toISOString()
        }): 
        setDuration({
            ...duration,
            from: "" ,
            to: ""            
        })        

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [duration.enabled])


    const clickPlanBtn = (e, plan) =>{
        console.log(plan)
        setSelectedPlan(plan)
        setStep(2)
        setTotalAmount(plan.price*12)
    }

    const changeRadio = e => {
        setDuration({...duration, [e.target.name]: e.target.value})
    }

    const clickNextBtn = e => setStep(3)

    const clickPen = e => {
        setSelectedPlan({packageid: ""})
        setStep(e)
    }

    const changeInput = e => {
        // setOrderValue({...orderValue, [e.target.name]: e.target.value})
    }

    const submitOrder = e => {
        e.preventDefault();

        fetch(TransactionUserServicepackage, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                ...selectedPlan,
                action: "Add",
                userid: localStorage.getItem("userid"),
                enabled: duration.enabled,
                price: totalAmount,
                expiration: duration.to  
                
                // "action" : "Add",                                      => Require;  key value
                // "packageid"       :  "freepackage01",       => Require; 
                // "packagetype"     :  "basic",                       => Require; "basic"/"advance"/"vip"/"customerize"
                // "packagename_cht" :  "基本免費方案 01",
                // "packagename_en"  :  "Free Package 01",
                // "description"     :  "Free Package 01",
                // "price"           :  "0",                
                // "enabled"         :  "1" ,                                  => int, default 0, 0:停用, 1:啟用;
                //  "expiration1"         :  "2022-08-06"              =>datetime,結帳後有效使用到期日
            })
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.result.toLowerCase().indexOf("ok")!==-1) {
                setMsg({...data, title: t("awesome"), text: t("order confirm"), icon: <FaCheck/> })
            } else {
                setMsg({...data, title: data.result, text: "", icon: <FaExclamation />})
            }
        })
        .catch(err => console.error(err))

        console.log(formRef)
        var formData = new FormData(formRef.current)
        var object = {};
        formData.forEach((value, key) => object[key] = value);
        console.log(object)

        const data={
            action: "Add", 
            userid: localStorage.getItem("userid"),
            orderno: new Date().toISOString().slice(0, 10).replaceAll("-", "")+new Date().toTimeString().slice(0,8).replaceAll(":", ""),
            orderdate: new Date().toISOString().slice(0, 10),
            amount: totalAmount,
            // "orderstatus"     : "0",    =>int, 0=處理中,1=已完成,2=取消
            // "paidstatus"      : "0",     =>int, 0=未付款,1=已付款,2=退款
            // "deliverystatus"  : "0",    =>int, 0=備貨中,1=已交貨,2=退貨
            //  "invoice": "",      =>發票編號
            //  "payno": "",       =>支付編號
            ...object
        }
        setOrderMasterObj(data)
        fetch(TransactionOrdermaster, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(data)  
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        .catch(err=>console.error(err))

        
    }

    const toggleAddress = e => {
        if(addressCheckboxRef.current.checked){
            shippingAddressRef.current.value=taxAddressRef.current.value;
        } else {
            shippingAddressRef.current.value=""
        }
    }
    
    const clickMsg = async e => {
        setMsg(null)
        setRunFetch(!runFetch)        
        props.history.push("/app/myaccount")
    }

    return(
        <main className="ServicePackage">
            <h1>4步驟訂購</h1>
            {/* <button onClick={clickPrint}>print</button> */}
            <div className="wrapper">
                <p>
                    <span>{t("your_package")}: </span>
                    <span>
                        {t(`servicePackage.${thisPackage.packageid}`)}
                        ({t("expire to")}: {thisPackage.expiration})
                    </span>
                </p>
                <section data-step="1">
                            <h1 className="step1">
                                <span>1</span>
                                <span>{t("choose_one_plan")}{step!==1 && <BsPencil onClick={()=>clickPen(1)}/>}</span>
                                </h1>
                            {
                                <div className="price-card-div" data-step={step!==1 ? "selected" : ""} style={{display: step===3 && "none" }}>
                                { 
                                    plans.map((plan, i)=>
                                        <div key={uuidv4()} className={plan.packageid===thisPackage.packageid ? "thisPackage" : (plan.packageid===selectedPlan.packageid ? "selectedPlan" : "")}>
                                            <PriceCard 
                                                t={t} 
                                                plan={plan} 
                                                linkto={"#"} 
                                                linkText={plan.packageid===thisPackage.packageid ? t("your_package") : (plan.packageid===selectedPlan.packageid ? <FaCheck/> : t("upgrade"))} 
                                                i18n={i18n} 
                                                onClick={(e)=>clickPlanBtn(e, plan)} 
                                                />
                                        </div>)
                                }
                            </div>    
                            }
                        </section>
                        <section>
                            <h1 className="step2">
                                <span>2</span>
                                <span>{t("plan_details")}</span>
                            </h1>
                            {
                                selectedPlan!==null && step>1 && <>
                                <div style={{display: step===3 && "none" }}>
                                    <h1><span>{t("selected_plan")}: </span>{i18n.language==="en" ? selectedPlan.packagename_en : selectedPlan.packagename_cht} : ({selectedPlan.packageid})</h1>
                                    <p><span className="price">${selectedPlan.price}</span>/{t("month")}</p>
                                    {/* <p>{t("total_amount")}<span className="price">{selectedPlan.price*12}</span>/{t("year")}</p> */}
                                    <p>{t("total_amount")}<span className="price">{totalAmount}</span>/{t("year")}</p>
                                    <label>
                                        <input name="enabled" type="radio" value="1" onClick={changeRadio} defaultChecked />立即開通方案
                                    </label>
                                    <label>
                                        <input name="enabled" type="radio" value="0" onClick={changeRadio}  />暫不開通
                                    </label>
                                    <div style={{display: duration.enabled==="1" ? "block" : "none"}}>
                                        <p>{t("valid from")}: {duration.from}</p>
                                        <p>{t("expire to")} {duration.to} </p>                                        
                                    </div>

                                </div>
                                {step!==3 && <button onClick={clickNextBtn}>{t("next")}</button>}
                                </>
                            }
                            </section>   
                        <section>
                            <h1 className="step3">
                                <span>3</span>
                                <span>{t("billing address and payment details")}</span>
                                </h1>
                            {step>2 && <>
                                <form  onSubmit={submitOrder} ref={formRef}>
                                <div className="personal-info-inputs">
                                    <div className="input-div">
                                        <label>{t("taxidnumber")}
                                            <input name="taxidnumber" type="tel"  onChange={changeInput} pattern="^[0-9-+\s()]*$" />
                                        </label>
                                    </div>
                                    <div className="address">
                                        <label>{t("taxaddress")}
                                            <input name="taxaddress" type="text" defaultValue={thisUser.address} onChange={changeInput} ref={taxAddressRef} /> 
                                        </label>  
                                        <label>{t("shipaddress")}<input type="checkbox" onChange={toggleAddress} ref={addressCheckboxRef} />{t("copy address")}
                                            <input name="shipaddress" type="text" onChange={changeInput}  ref={shippingAddressRef} /> 
                                        </label>                                          
                                    </div>
                                    </div>
                                    {/* <div className="basic-info-div">
                                        <p>{i18n.language==="en" ? selectedPlan.packagename_en : selectedPlan.packagename_cht}</p>
                                        <label>{t("userid")}
                                            <input name="userid" defaultValue={thisUser.userid} className="disabled-input" />
                                        </label>
                                        <label>{t("orderdate")}
                                            <input name="orderdate" type="text"  defaultValue={new Date().toLocaleDateString().replaceAll("/", "-")} onChange={changeInput} className="disabled-input" />
                                        </label>
                                        <label>{t("amount")}
                                            <input name="amount" type="text"  defaultValue={selectedPlan.price*12} onChange={changeInput} className="disabled-input" />
                                        </label>    
                                    </div>    
                                        <label>{t("payno")}
                                            <input name="payno" type="tel"  onChange={changeInput} pattern="^[0-9-+\s()]*$" />
                                        </label>
                                        <label>{t("invoice")}
                                            <input name="invoice" type="text" defaultValue="" onChange={changeInput} /> 
                                        </label>  
                                        <label>{t("orderstatus")}
                                            <select name="orderstatus">
                                                <option value="0">{t("processing")}</option>
                                                <option value="1">{t("completed")}</option>
                                                <option value="3">{t("cancel")}</option>                                    
                                            </select>
                                        </label>
                                        <label>{t("paidstatus")}
                                            <select name="paidstatus">
                                                <option value="0">{t("unpaid")}</option>
                                                <option value="1">{t("paid")}</option>
                                                <option value="3">{t("refunded")}</option>                                   
                                            </select>
                                        </label>
                                        <label>{t("deliverystatus")}
                                            <select name="deliverystatus">
                                                <option value="0">{t("instock")}</option>
                                                <option value="1">{t("delivered")}</option>
                                                <option value="3">{t("returned")}</option>                                   
                                            </select>
                                        </label>                   */}
                                        {/* <input name="amount" value={totalAmount} disabled={true} /> */}
                                        <p>{t("total_amount")}<span className="price">{totalAmount}</span></p>
                                    <button>{t("pay")}</button>
                                </form>                   
                            </>}
                
                            </section>     
                            {
                                msg!==null && <MsgTemplate 
                                                onClick={clickMsg}
                                                msg={msg}
                                                t={t}
                                                i18n={i18n}
                                                thisUser={thisUser}
                                                selectedPlan={selectedPlan}
                                                orderMasterObj={orderMasterObj}
                                                uuidv4={uuidv4}
                                                />          
                            }

            </div>
        </main>
    )
}

export default ServicePackage;