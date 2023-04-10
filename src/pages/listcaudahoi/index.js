import React, {useEffect} from 'react';
import Question from "../../components/Question";
import "./style.css";
import dbService from "../../services/dbService";
import {useNavigate} from "react-router-dom";

const ListCauDaHoi = () => {
    const [list, setList] = React.useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        (async () => {
            setList(await dbService.getAllAnswer())
        })()
    }, [])
    return (
        <div className={"d-flex flex-column justify-content-center align-items-center vh-100"}>
            <div className={"d-flex flex-row list justify-content-center align-items-center lon"} id={"list"}>
                {list.map((item, index) => {
                    return <Question key={index} name={item.name} question={item.question} type={item.answer !== null}
                                     onClick={() => {
                                         navigate("/answer/" + item.id);
                                     }
                                     }/>
                })}
            </div>
        </div>
    )
}

export default ListCauDaHoi;