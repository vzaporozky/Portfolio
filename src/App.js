import './styles/App.css';
import './styles/null.css';
import React from 'react';
// import {  } from 'react-router-dom';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar.jsx"
import About from "./pages/About.jsx"
import Main from "./pages/ain.jsx"

function App() {
  return (
  <BrowserRouter>
  <Navbar/>

    <Switch>
      <Route path='/' component= {Main} exact/>
      <Route path='/about' component= {About} exact/>
      <Redirect to='/'/>
    </Switch>
    
  </BrowserRouter>
  );
}

export default App;
