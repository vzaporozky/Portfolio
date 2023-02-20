import React from 'react';
// import './styles/null.css';
import './styles/App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar.jsx";
import About from "./pages/About.jsx";
import MainPage from "./pages/MainPage.jsx";
import Contacts from "./pages/Contacts.jsx";
import ColorGame from "./pages/apps/ColorGame.jsx";

function App() {
  return (
  <BrowserRouter>
  <Navbar/>

    <Switch>
      <Route path='/' component= {MainPage} exact/>
      <Route path='/about' component= {About} exact/>
      <Route path='/contacts' component= {Contacts} exact/>
      <Route path='/ColorGame' component= {ColorGame} exact/>
      <Redirect to='/'/>
    </Switch>
    
  </BrowserRouter>
  );
}

export default App;
