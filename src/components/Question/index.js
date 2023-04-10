import React from 'react';
import style from './style.module.css';

// list props

const Question = ({...props}) => {
    let info;
    if (props.type === true) {
        info = {
            type: "Đã trả lời",
            color: "success",
            icon: "check-circle",
            style: style.type_ok
        }
    } else {
        info = {
            type: "Chưa trả lời",
            color: "danger",
            icon: "x-circle",
            style: style.type_error
        }
    }
    return (
        <div className={"card border-" + info.color + " ms-3 mt-3 mb-3 " + style.width_card}
             onClick={props.onClick ? props.onClick : null}>
            <div className="card-header"><i className={"bi bi-" + info.icon + " " + info.style}> {info.type}</i></div>
            <div className={"card-body"}>
                <h5 className="card-title text-primary">{props.name?.length > 15 ? props.name.slice(0, 15) + "..." : props.name}</h5>
                <p className="card-text">{props.question.length > 50 ? props.question.slice(0, 50) + "..." : props.question}</p>
            </div>
        </div>
    )
}

export default Question;