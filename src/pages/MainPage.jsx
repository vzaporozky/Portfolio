import React from "react";
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
                    nameApp='ChatGPT Clone'
                    to="/ChatGPT"
                    table='2'
                    firstTable={['html','CSS','JavaScript', 'React']}
                    secondTable={['React(updated)']}
                    src='./images/ChatGPT_main.png'
                    img1='./images/ChatGPT_1.png'
                    img2='./images/ChatGPT_2.png'
                    img3='./images/ChatGPT_main.png'
                    description={['This is a simple chat that uses the OpenAI API. The user can input text messages and receive response messages processed by the OpenAI API.']}
                />
                <LinkToApp 
                    nameApp='Color Game'
                    to="/colorgame"
                    table='2'
                    firstTable={['html','CSS','JavaScript']}
                    secondTable={['React(updated)']}
                    src='./images/ColorGame_main.png'
                    img1='./images/ColorGame_1.png'
                    img2='./images/ColorGame_2.png'
                    img3='./images/ColorGame_3.png'
                    description={['In this game you can find right color. If color its corect, this color will hide, and you will be looking for corect color', 
                        'This game is needed to pass the time.']}
                />
                <LinkToApp 
                    nameApp='HangMan'
                    to="/HangMan"
                    table='2'
                    firstTable={['html','CSS','JavaScript']}
                    secondTable={['React(updated)']}
                    src='./images/Hangman_main.png'
                    img1='./images/Hangman_1.png'
                    img2='./images/Hangman_2.png'
                    img3='./images/Hangman_3.png'
                    description={['In this game, you need to try to find the right word.', 
                        'You can ask for a hint.','P.S. not finished...(']}
                        toolTip = 'left'
                />
                
            </div>
        </div>
    )
}

export default MainPage;