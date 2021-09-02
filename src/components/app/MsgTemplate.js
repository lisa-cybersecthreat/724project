import "../../styles/MsgTemplate.scss";
import { AiFillCheckCircle } from "react-icons/ai";


const MsgTemplate = (props) => {

    return(
        <div id="MsgTemplate" className="overlay">
            <div className={`box ${props.msg.result.toLowerCase()==="ok" ? "" : "msg-red"}`}>
                <div className="circle">{props.msg.icon}</div>``
                <h1>{props.msg.title}</h1>
                <p>{props.msg.text}</p>
                <input value="ok" onClick={props.onClick} readOnly />
                <ul><h1>selectedPlan</h1>
                    {
                        Object.keys(props.selectedPlan).map((key, i)=><li>{key}:{Object.values(props.selectedPlan)[i]}</li>)
                    }
                </ul>
                <ul ><h1>orderMasterObj</h1>
                    {
                        Object.keys(props.orderMasterObj).map((key, i)=><li>{key}:{Object.values(props.orderMasterObj)[i]}</li>)
                    }
                </ul>
            </div>
        </div>   
    )
}

export default MsgTemplate;