import React from 'react';
import {Link} from 'react-router-dom';
import cl from './Link.module.css';

const Linkto = (props) => {
    return (
        <Link {...props} className={cl.Link}>
            {props.children}
        </Link>
    )
}
export default Linkto;