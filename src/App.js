import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import './styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    function toggleTheme() {
        if(theme === 'dark') {
            setTheme('light');
            localStorage.setItem('theme', 'light')
        }else{
            setTheme('dark');
            localStorage.setItem('theme', 'dark')
        }
    }

    useEffect(() => {
        if(localStorage.getItem('auth')) setIsAuth(true);

        localStorage.getItem('theme') === 'dark' ? setIsAuth('dark') : setIsAuth('light')
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar toggleTheme={toggleTheme} theme={theme}/>
                <AppRouter theme={theme}/>
            </BrowserRouter>
        </AuthContext.Provider>

  
    );
}

export default App;
