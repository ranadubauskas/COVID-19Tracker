import React from "react";
import "./App.css";
import Home from './Pages/Home';
import About from './Pages/About';
import Countries from './Pages/Countries';
import Map from  './Pages/Map';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';




const App = () => {
  return (
     

    <Router>
    <nav className="nav">
    <ul className="nav-list">
     <header style={{fontSize:'26px', paddingRight: "60px", paddingLeft:  "400px"}}> COVID-19 Live</header>
          <li style={{paddingRight: "40px"}}><Link to="/" className="link">Home</Link></li>
          <li style={{paddingRight: "40px", textAlign:"center"}}><Link to="/Countries" className="link">Country Data</Link></li>
          <li style={{paddingRight: "40px"}}> <Link to="/Map" className="link">Map </Link> </li>
          <li style={{paddingRight: "40px"}}> <Link to="/About" className="link"> Symptoms </Link></li>
        </ul>
        </nav>
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

