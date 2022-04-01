import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import './Countries.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function Countries() {
  const [searchCountry, setSearchCountry]=useState("");
  const [latest, setLatest]=useState([]);
  const [result, setResult]=useState([]);


  useEffect(() => {
    axios
    .all([
    axios.get('https://disease.sh/v3/covid-19/all'),
    axios.get('https://disease.sh/v3/covid-19/countries')
    ])
    .then(responseArr => {
      setLatest(responseArr[0].data);
      setResult(responseArr[1].data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);


const filterCountry= result.filter(item=> {
  return searchCountry!== "" ? item.country.includes(searchCountry) : item;
});


  const countries= filterCountry.map((data, i) => {
    return (
    <Card 
        key={i}
        bg="light"
        text="dark"
        className="text-center"
        style={{margin: "10px"}}>
      <Card.Img src={data.countryInfo.flag} alt="Card Image" style={{opacity: 0.5}}/>
      <Card.ImgOverlay>
      <Card.Body>
        <Card.Title> {data.country} </Card.Title>
        <Card.Text> Cases {data.cases}</Card.Text>
        <Card.Text> Deaths {data.deaths}</Card.Text>
        <Card.Text> Recovered {data.recovered}</Card.Text>
        <Card.Text> Today's Cases {data.todayCases}</Card.Text>
        <Card.Text> Today's Deaths {data.todayDeaths}</Card.Text>
      </Card.Body>
      </Card.ImgOverlay>
        </Card>
  );
});


  return (
    <div>

<Form className="form">
  <Form.Group className="search" controlId="formGroupSearch">
    <Form.Control 
    type="text" 
    placeholder="Search a Country" 
    onChange={e=> setSearchCountry(e.target.value)}
    />
  </Form.Group>
 </Form>




<div className="countries">
          {countries};
 </div>

   </div>
  );
};

export default Countries;
