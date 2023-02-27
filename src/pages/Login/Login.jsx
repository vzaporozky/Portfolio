import React, {useContext} from "react";
import {AuthContext} from "../../context/index";
import classes from './Login.module.css'

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className={classes.container}>
            <h1>Страница логина</h1>

            <form onSubmit={login} className={classes.form}>
                <input type="text" placeholder="Name" className={classes.input} />
                <input type="password"  placeholder="Login" className={classes.input}/>
                <button className={classes.button}>Enter</button>
            </form>
        </div>
    )
}

export default Login;