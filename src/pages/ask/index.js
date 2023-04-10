import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import dbService from "../../services/dbService";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";

const Ask = () => {
    let {id} = useParams();
    let [user, setUser] = useState(undefined);
    let navigate = useNavigate();
    useEffect(() => {
        (async () => {
            let response = await dbService.getUserInfo(id);
            let kq = await response.json();
            if (kq.email === JSON.parse(localStorage.getItem('user')).email)
                navigate("/duochoi");
            setUser({
                src: kq.link_avatar,
                email: kq.email,
                name: kq.name,
            });
        })();
    }, []);
    return (
        <> {user !== undefined && user.email &&
            (
                <div>
                    <Avatar src={user.src} name={user.name} email={user.email}/>
                    <div>
                        <input id={"cauhoi"} type="text" placeholder="Nhập câu hỏi của bạn"/>
                        <Button className={"btn btn-danger"} onClick={async () => {
                            let cauhoi = document.getElementById("cauhoi").value;
                            let res = await dbService.ask(id, cauhoi);
                            let kq = await res.json();
                            navigate("/answer/" + kq.id);
                        }
                        }>Gửi</Button>
                    </div>
                </div>
            )
        }
        </>
    )
}

export default Ask;