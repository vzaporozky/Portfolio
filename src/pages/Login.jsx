import React, {useContext} from "react";
import {AuthContext} from "../context/index";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Страница логина</h1>

            <form onSubmit={login}>
                <input type="text" placeholder="Name" />
                <input type="password"  placeholder="Login"/>
                <button>Enter</button>
            </form>
        </div>
    )
}

export default Login;