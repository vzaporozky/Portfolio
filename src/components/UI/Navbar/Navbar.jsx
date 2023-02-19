import React from "react";
// import {Link} from "react-router-dom";
import cl from './Navbar.module.css';
import Linkto from "../Link/Link";

const Navbar = () => {
    return(
        <div className={cl.navbar}>
            <Linkto to="/">Start</Linkto>
            <Linkto to="/about">About</Linkto>
        </div>
    )
}

export default Navbar;