import React, {useEffect, useImperativeHandle, useState} from 'react';
import Button from "../../../components/Button";
import dbService from "../../../services/dbService";

const ShowQuestion = (item, ref) => {
    let [question, setQuestion] = useState(item);

    useImperativeHandle(ref, () => ({
        setQuestion: (item) => {
            setQuestion(item);
        }
    }));
    return (
        <>
            <div className={"d-flex flex-column align-items-center"}>
                <h1 className={"text-center"}>{question.user}</h1>
                <p className={"text-center"}>{question.question}</p>
                {question.answer && <p className={"text-center"}>{question.answer}</p>}
            </div>
            <div>
                <input id={"traloi"} type="text" placeholder="Nhập trả lời của bạn"/>
                <Button className={"btn btn-danger"} onClick={async () => {
                    let traloi = document.getElementById("traloi").value;
                    await dbService.answer(question.question_id, traloi);
                    item.state(await dbService.getAllQuestion());
                }
                }>Gửi</Button>
            </div>
        </>
    )
}

export default React.forwardRef(ShowQuestion);