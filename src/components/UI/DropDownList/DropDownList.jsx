import React, {useState} from "react";
import classes from './DropDownList.module.css'

const DropDownList = () => {
    const [state, setState] = useState(false)

    const changeState = () => {
        setState(!state)
    }
    

    return (
        <div className={classes.container}>
            <button id="spa" onClick={changeState}>Сладости (нажми меня)!</button>
            <ul className={state ? classes.selected : classes.list}>
                <li>Пирог</li>
                <li>Пончик</li>
                <li>Мед</li>
            </ul>
        </div>
    )
}

export default DropDownList;