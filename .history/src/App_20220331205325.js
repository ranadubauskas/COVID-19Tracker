import React from "react";
import "./App.css";
import Home from './Pages/Home';
import About from './Pages/About';
import Countries from './Pages/Countries';
import Map from  './Pages/Map';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



const App = () => {
  return (


    <Router>
     
    
     <div class="container">
      <nav class="navbar navbar-expand-lg main-nav px-0">
        <a class="navbar-brand" href="/mojo">
					      <img src="http://rajeshdas.com/assets/images/logo.svg" alt="rajeshdas.com"/>
					    </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar icon-bar-1"></span>
                        <span class="icon-bar icon-bar-2"></span>
                        <span class="icon-bar icon-bar-3"></span>
                    </button>
        <div class="collapse navbar-collapse" id="mainMenu">
          <ul class="navbar-nav ml-auto text-uppercase f1">
            <li>
              <a href="#home" class="active active-first">home</a>
            </li>
            <li>
              <a href="#about">about us</a>
            </li>
            <li>
              <a href="#service">services</a>
            </li>
            <li>
              <a href="#project">projects</a>
            </li>
            <li>
              <a href="#team">team</a>
            </li>
            <li>
              <a href="#testimony">testimonils</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
       

     






      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Countries' element={<Countries/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Map' element={<Map/>} />
        </Routes>
    </Router>
  )
}

export default App

