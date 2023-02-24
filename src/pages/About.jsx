import React from "react";
import classes from "./About.module.css"
import DropDownList from "../components/UI/DropDownList/DropDownList"

const About = () => {
    return (
        <div className={classes.about}>
            <h1>About</h1>
            <p>На этой странице вы можете найти все мои пет-проекты, которые я сделал на HTML, CSS, JavaScript и React</p>
            <DropDownList 
                
            />
        </div>
    )
}
export default About;