import React, {useEffect, useMemo, useState} from 'react';
import login, {checkLogin, logout, info} from "../../utils/fb";
import Button from "../../components/Button";
import Avatar from "../../components/Avatar";
import {useNavigate, useParams} from "react-router-dom";
import dbService from "../../services/dbService";

const Answer = () => {
    let {id} = useParams();
    let [question, setQuestion] = useState(undefined);
    let navigate = useNavigate();

    useEffect(() => {
        (async () => {
            let response = await dbService.getQuestion(id);
            setQuestion(response)
        })();
    }, []);

    console.log(question);
    return (
        <div>
            <Avatar src={question?.link_avatar} name={question?.name} email={question?.email}/>
            <div>câu hỏi: {question?.question}</div>
            {question?.answer && <div>câu trả lời: {question?.answer}</div>}
        </div>
    )
}

export default Answer;