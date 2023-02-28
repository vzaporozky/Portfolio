import React from 'react';
import {Link} from 'react-router-dom';
import cl from './Link.module.css';

const Linkto = (props) => {
    return (
        <Link {...props} className={props.theme === 'dark' ? cl.Link : cl.Link +' '+ cl.Link_light}>
            {props.children}
        </Link>
    )
}
export default Linkto;