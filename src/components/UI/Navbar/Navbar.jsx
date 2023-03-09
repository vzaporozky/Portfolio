import React, {useContext} from "react";
// import {Link} from "react-router-dom";
import cl from './Navbar.module.css';
import Linkto from "../Link/Link";
import { AuthContext } from "../../../context";

const Navbar = ({toggleTheme, theme}) => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const exitButton = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return(
        <div className={theme === 'dark' ? cl.navbar : cl.navbar + " " + cl.navbar_light}>
            <p style={{position:'absolute', left:0}}>Use only PS (Adaptive layout in progras...)</p>
            {isAuth
                ?
                    <div className={cl.container}>
                        <Linkto theme={theme} to="/">Home</Linkto>
                        <Linkto theme={theme} to="/about">About</Linkto>
                        <Linkto theme={theme} to="/contacts">Contacts</Linkto>
                        <button className={theme === 'dark' ? cl.toggleTheme : cl.toggleTheme +' '+ cl.toggleTheme_light} onClick={toggleTheme}><img src="" alt="" /> <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></button>
                        <button onClick={exitButton} className={theme === 'dark' ? cl.button :  cl.button + " " + cl.button_light}>Log Out</button>
                    </div>
                :
                    ''
            }
        </div>
    )
}

export default Navbar;