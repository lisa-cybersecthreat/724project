import { useContext, useState } from "react";
import { InitContext } from "../../contexts/initContext";

const OrderMaster = props => {
    const { TransactionOrderdetail } = useContext(InitContext)
    const [orderDetail, setOrderDetail] = useState([])

    const clickOrderDetail = elm => {
        fetch(TransactionOrderdetail, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                action: "Query",
                orderno: elm,
                packageid: ""
            }),      
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data[0].orderno===undefined) return
            setOrderDetail(data)
        })
        .catch(err=>console.error(err))
    }

    return(
        <div style={{display: "flex"}}>
            <ul style={{border: "1px solid olive"}} key={props.uuidv4()}><p>orderMaster:</p>
                {
                    Object.keys(props.om).map((key, i)=>
                    <li key={props.uuidv4()} >{key}: {Object.values(props.om)[i]}</li>)
                }
                <button onClick={()=>clickOrderDetail(props.om.orderno)}>clickOrderDetail</button>
                <button onClick={()=>props.delOderMaster(props.om.orderno)}>delete</button>
            </ul>
            <ul><p>orderDetail: </p>
                {
                    orderDetail.length>0 &&  Object.keys(orderDetail[0]).map((key, i)=><li>{key}: {Object.values(orderDetail[0])[i]} </li>)
                }
            </ul>
        </div>
    )
}

export default OrderMaster;

{/* <ul style={{border: "1px solid olive"}} key={uuidv4()}>
{Object.keys(om).map((key, i)=><li key={uuidv4()}>{key}: {Object.values(om)[i]}</li>)}
<button onClick={()=>clickOrderDetail(om.orderno)}>clickOrderDetail</button>
<button onClick={()=>delOderMaster(om.orderno)}>delete</button>
</ul> */}