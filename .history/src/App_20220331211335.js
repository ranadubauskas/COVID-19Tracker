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
     
     <h5 className="h5"> COVID-19 Live Updates </h5>
      <nav className="nav">
     <ul className="nav-list">
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/Countries" className="link"> Data by Country</Link></li>
          <li> <Link to="/Map" className="link">Map </Link> </li>
          <li> <Link to="/About" className="link"> Symptoms </Link></li>
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

