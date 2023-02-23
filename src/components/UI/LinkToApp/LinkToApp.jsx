import React, {useState} from "react";
import {Link} from 'react-router-dom';
import classes from './LinkToApp.module.css';
import ToolTip from "./ToolTip";

const LinkToApp = (props) => {
    const [items, setItems] = useState(false);
    const handleMouseEnter = () => {
        setItems(true)
    };

    const handleMouseLeave = () => {
        setItems(false);
    };

    return(
        <Link to={props.to} className={classes.app} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div><img src={props.src} alt="" /></div>
            <div className={classes.text}>
                <h3>Color Game</h3>
            </div>
            {items && 
                <ToolTip 
                    img1={props.img1}
                    img2={props.img2}
                    img3={props.img3}
                    table={props.table}
                    firstTable={props.firstTable}
                    secondTable={props.secondTable}
                    description={props.description}
                    toolTip={props.toolTip}
                />
            }

        </Link>
    )
}

export default LinkToApp;