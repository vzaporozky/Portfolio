import React from "react";
import {Link} from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="main">
            <h1>Home Page</h1>
            <p>Описание проектов вы можете посмотреть здесь: <Link style={{color: "red"}} to="/about">About</Link></p>
            <p>Контакты вы можете посмотреть здесь: <Link style={{color: "red"}} to="/contacts">Contact</Link></p>
            <h1>Applications</h1>
            <div className="home_container">
                <div className="home_app">fdsa</div>
                <div className="home_app">vzv</div>
                <div className="home_app">qwe</div>
                <div className="home_app">431</div>
                <div className="home_app"></div>
                <div className="home_app"></div>
            </div>
        </div>
    )
}

export default MainPage;