import React, {useState} from "react";
import classes from './DropDownList.module.css'

const DropDownList = (props) => {
    const [state, setState] = useState(false)
    const [howToDo, setHowToDo] = useState(false)

    const changeState = () => {
        setState(!state)
        setHowToDo(false)
    }
    const changeHowToDo = (event) => {
        event.stopPropagation()
        setHowToDo(!howToDo)
    }

    return (
        <div className={classes.container} onClick={changeState}>
            <div className={classes.block}>
                <img src={props.img} alt="" />
                <h1>{props.name}</h1>
            </div>
            
            <div className={state ? classes.description_disp : classes.none}>
                <ul className={classes.list}>
                {props.listTech.map((el, i) => (<li key={i}>{el}</li>))}
                </ul>

                {props.description &&
                    <p style={{marginTop:'20px'}} onClick={event => event.stopPropagation()}>{props.description}</p>
                }

                {props.linkGit &&
                    <p  onClick={event => event.stopPropagation()} style={{marginTop:'20px'}}>First version of the application:__
                        <a href={props.linkGit} style={{color: "white"}}>{props.linkGit}</a>
                    </p>
                }
                
                {props.listDesc &&
                    <div>
                        <button className={classes.button} onClick={changeHowToDo}>How To Do It</button>
                        <ul className={howToDo ? classes.howToDoIt_list : classes.none} onClick={event => event.stopPropagation()}>
                            {props.listDesc.map((el, i) => (<li key={i}>{el}</li>))}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default DropDownList;