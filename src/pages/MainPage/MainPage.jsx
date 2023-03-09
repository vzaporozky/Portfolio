import React from "react";
import {Link} from 'react-router-dom';
import LinkToApp from '../../components/UI/LinkToApp/LinkToApp'
import propsForLink from './index'

const MainPage = () => {

    return (
        <div className="main">
            <h1>Home Page</h1>
            <p>Описание проектов вы можете посмотреть здесь: <Link style={{color: "red"}} to="/about">About</Link></p>
            <p>Контакты вы можете посмотреть здесь: <Link style={{color: "red"}} to="/contacts">Contact</Link></p>
            <h1>Applications</h1>
            <div className="home_container">
                {
                    propsForLink.map((props, index) =>(
                        <LinkToApp {...props} key={props.to}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MainPage;