import React from 'react';
// import './styles/null.css';
import './styles/App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar.jsx";
import MainPage from "./pages/MainPage.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import ColorGame from "./pages/apps/ColorGame.jsx";
import HangMan from "./pages/apps/HangMans.jsx";

function App() {
  return (
  <BrowserRouter>
  <Navbar/>

    <Switch>
      <Route path='/' component= {MainPage} exact/>
      <Route path='/about' component= {About} exact/>
      <Route path='/contacts' component= {Contacts} exact/>
      <Route path='/ColorGame' component= {ColorGame} exact/>
      <Route path='/HangMan' component= {HangMan} exact/>
      <Redirect to='/'/>
    </Switch>
    
  </BrowserRouter>
  );
}

export default App;
