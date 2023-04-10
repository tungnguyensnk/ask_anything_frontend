import React, {useEffect} from 'react';
import Question from "../../components/Question";
import "./style.css";
import dbService from "../../services/dbService";
import ShowQuestion from "./component/cauhoi";

const ListCauDuocHoi = () => {
    const [style, setStyle] = React.useState({
        list: "lon",
        question: "visually-hidden"
    });
    let questionRef = React.useRef();
    let question = React.useRef();
    const show = (item) => {
        setStyle({
            list: "nho",
            question: "visible"
        })
        questionRef.current.setQuestion(item)
    }
    const [list, setList] = React.useState([]);
    useEffect(() => {
        (async () => {
            setList(await dbService.getAllQuestion())
        })()
    }, [])

    console.log(list)
    useEffect(() => {
        if (question.current)
            question.current = list.filter(item => item.question_id === question.current.question_id)[0];
        if (style.question === "visible")
            show(question.current)
    }, [list])
    return (
        <div className={"d-flex flex-column justify-content-center align-items-center vh-100"}>
            <div className={"d-flex flex-column justify-content-center align-items-center main " + style.question}>
                <ShowQuestion name={""} question={""} type={false} ref={questionRef} state={setList}/>
            </div>
            <div className={"d-flex flex-row list justify-content-center align-items-center " + style.list} id={"list"}>
                {list.map((item, index) => {
                    return <Question key={index} name={item.name} question={item.question} type={item.answer !== null}
                                     onClick={() => {
                                         question.current = item;
                                         show(item);
                                     }}/>
                })}
            </div>
        </div>
    )
}

export default ListCauDuocHoi;