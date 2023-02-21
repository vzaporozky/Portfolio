import React, {useState} from "react";
import {Link} from 'react-router-dom';
import LinkToApp from '../components/UI/LinkToApp/LinkToApp'

const MainPage = () => {

    return (
        <div className="main">
            <h1>Home Page</h1>
            <p>Описание проектов вы можете посмотреть здесь: <Link style={{color: "red"}} to="/about">About</Link></p>
            <p>Контакты вы можете посмотреть здесь: <Link style={{color: "red"}} to="/contacts">Contact</Link></p>
            <h1>Applications</h1>
            <div className="home_container">
                <LinkToApp 
                    to="/colorgame"
                    table='2'
                    firstTable={['html','CSS','JavaScript']}
                    secondTable={['React(updated)']}
                    src='./images/ColorGame_main.png'
                    img1='./images/ColorGame_1.png'
                    img2='./images/ColorGame_2.png'
                    img3='./images/ColorGame_3.png'
                />
                <LinkToApp 
                    to="/colorgame"
                    table='2'
                    firstTable={['html','CSS','JavaScript']}
                    secondTable={['React(updated)']}
                    src='./images/ColorGame_main.png'
                    img1='./images/ColorGame_1.png'
                    img2='./images/ColorGame_2.png'
                    img3='./images/ColorGame_3.png'
                />
                <LinkToApp 
                    to="/colorgame"
                    table='2'
                    firstTable={['html','CSS','JavaScript']}
                    secondTable={['React(updated)']}
                    src='./images/ColorGame_main.png'
                    img1='./images/ColorGame_1.png'
                    img2='./images/ColorGame_2.png'
                    img3='./images/ColorGame_3.png'
                    toolTip = '1'
                />
                
            </div>
        </div>
    )
}

export default MainPage;