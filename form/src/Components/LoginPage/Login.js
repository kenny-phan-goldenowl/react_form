import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Square from "./Square"
import LoginForm from "./LoginForm";

function Login() {

    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("isLogin") === "true") {
            navigate('/home')
        }
    })

    return (
        <div>
            <Square right/>
            <LoginForm/>
            <Square left/>
        </div>
    )
}

export default Login;