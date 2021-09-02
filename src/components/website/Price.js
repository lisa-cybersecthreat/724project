import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from 'uuid';
import PriceCard from "./PriceCard";
import "../../styles/Price.scss"
import { useContext, useEffect } from "react";
import { InitContext } from "../../contexts/initContext";

function Price (props) {
    const { t, i18n } = useTranslation();
    const { TransactionServicepackage,
            plans
    } = useContext(InitContext);

    // useEffect(()=>{
    //     console.log("run transaction service package")
    //     var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im5ldyIsInJvbGUiOiJmcmVlIiwibmJmIjoxNjI5OTU4ODc5LCJleHAiOjE2Mjk5NjYwNzksImlhdCI6MTYyOTk1ODg3OX0.xFrYUkYyAG8-yFxONnXrlVFLW7cNrOX7_tnrzdo9yW0"
    //     fetch(TransactionServicepackage, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             'Authorization': `Bearer ${token}`
    //         },
    //         body: JSON.stringify({
    //             "action" : "Query",
    //             "packagetype":  "",
    //             "packageid":  "", 
                
    //             "action": "Update",
    //             "packageid": "advance", 
    //             "description": "advanced plan",

    //             "action": "Add",
    //             "packagetype": "advance",
    //             "packageid":  "advance",
    //             "enabled": "1",
    //             "packagename_cht": "進階版方案",
    //             "packagename_en": "advanced Package",
    //             "description": "advanced plan for only 5000 per month",
    //             "price": "5000",              

    //             "action": "Delete",
    //             "packageid": "package",
    //         })
    //     })
    //     .then(res=>res.json())
    //     .then(data=> {
    //         console.log(data)
    //     })
    //     .catch(err => console.error(err)) 
    // }, [TransactionServicepackage])

    return(
        <main id="Price" className="width-wrapper">
            <h2>{t("30days_free_creditcard")}</h2>
            <div className="price-card-div">
                {
                    plans.map(plan=>
                        <div key={uuidv4()}>
                            <PriceCard t={t} plan={plan} linkto={"/register"} linkText={t("sign_up_now")} p={t("30days_free")} i18n={i18n} />
                        </div>)
                }
                {/* <PriceCard t={t} plan={t("servicePackage.freepackage01")} price={0} linkto={"/register"} linkText={t("sign_up_now")} p={t("30days_free")}/>
                <PriceCard t={t} plan={t("servicePackage.package01")} price={1000} linkto={"/register"} linkText={t("sign_up_now")} p={t("30days_free")}/>
                <PriceCard t={t} plan={t("servicePackage.advance")} price={2000} linkto={"/register"} linkText={t("sign_up_now")} p={t("30days_free")}/>
                <PriceCard t={t} plan={t("servicePackage.vip")} price={3000} linkto={"/register"} linkText={t("sign_up_now")} p={t("30days_free")}/>
                <PriceCard t={t} plan={t("servicePackage.customerize")} price={5000} linkto={"/register"} linkText={t("sign_up_now")} p={t("30days_free")}/> */}
            </div>
        </main>
    )
}

export default Price;