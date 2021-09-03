import "../../styles/MsgTemplate.scss";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const MsgTemplate = (props) => {

    const clickPrint = async e => {
        await html2canvas(document.querySelector(".print")).then(canvas => {
            // const image = canvas.toDataUrl();
            // console.log(image)
            const pdf = new jsPDF()
            pdf.addImage(canvas, "JPEG", 0, 0)
            pdf.save(`${props.t("plan_details")}.pdf`)
        })
        props.onClick();
    }

    return(
        <div id="MsgTemplate" className="overlay">
            <div className={`box ${props.msg.result.toLowerCase()==="ok" ? "" : "msg-red"}`}>
                <div className="circle">{props.msg.icon}</div>
                    <h1>{props.msg.title}</h1>
                    <p>{props.msg.text}</p>
                <div className="print">    
                    <ul><p>{props.t("selected_plan")}</p>
                        { Object.keys(props.selectedPlan).map((key, i)=><li key={props.uuidv4()}>{key}:{Object.values(props.selectedPlan)[i]}</li>) }
                    </ul>
                    <hr/>
                    <ul ><p>{props.t("plan_details")}</p>
                        { Object.keys(props.orderMasterObj).map((key, i)=><li key={props.uuidv4()}>{key}:{Object.values(props.orderMasterObj)[i]}</li>) }
                    </ul>                    
                </div>
                <input value="ok" onClick={props.onClick} readOnly />
                { props.msg.result.toLowerCase()==="ok" && <input value="print" onClick={clickPrint} readOnly /> }
            </div>
        </div>   
    )
}

export default MsgTemplate;