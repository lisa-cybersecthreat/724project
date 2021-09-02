import { NavLink } from "react-router-dom";

function PriceCard(props) {
    return(
        <div className="PriceCard" >
            {/* <h2 className="title">{props.plan.packageid}</h2> */}
            <h2 className="title">{props.i18n.language==="en" ? props.plan.packagename_en : props.plan.packagename_cht}</h2>
            <p><span className="price">${props.plan.price}</span>/{props.t("month")}</p>
            <p>( {props.t("paid_annually")} )</p>
            <NavLink exact to={props.linkto} activeClassName="active-link" onClick={props.onClick}>
                <h2>{props.linkText}</h2>
                {props.p}
            </NavLink>
            <p>{props.plan.description}</p>
        </div>
    )
}


export default PriceCard;