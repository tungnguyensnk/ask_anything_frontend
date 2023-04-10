import React, {useEffect, useState} from 'react';
import login, {checkLogin, logout, info} from "../../utils/fb";
import Button from "../../components/Button";
import Avatar from "../../components/Avatar";
import {useNavigate} from "react-router-dom";
import dbService from "../../services/dbService";

const Login = () => {
    let navigate = useNavigate();
    let check = () => {
        if (checkLogin().status === 'connected') {
            info().then((userInfo) => {

                setUser({
                    src: userInfo.picture.data.url,
                    email: userInfo.email,
                    name: userInfo.name,
                });
            });
        } else {
            setUser(null);
        }
    }
    let [user, setUser] = useState(undefined);
    useEffect(() => {
        check();
    }, []);

    (async () => {
        if (user) {
            let response = await dbService.login(user.email, user.name, user.src);
            console.log(response);
        }
    })();
    console.log(user);
    return (
        <div className={"d-flex align-items-center justify-content-center container-fluid vh-100"}>
            {(user &&
                    <div>
                        <Avatar src={user.src} name={user.name} email={user.email}/>
                        <Button onClick={async () => {
                            await logout();
                            check();
                        }} className={"btn btn-danger"}>Logout</Button><br/>
                        <Button onClick={() => navigate("/duochoi")} className={"btn btn-danger"}>Danh sách câu được
                            hỏi</Button><br/>
                        <Button onClick={() => navigate("/dahoi")} className={"btn btn-danger"}>Danh sách câu đã
                            hỏi</Button>
                    </div>)
                ||
                (user === null &&
                    <Button onClick={async () => {
                        await login();
                        check();
                    }} className={"btn text-white"} style={{backgroundColor: "#55acee"}}><i
                        className={"fab fa-facebook-f me-2"}></i>Đăng nhập</Button>
                )}
        </div>
    )
}

export default Login;