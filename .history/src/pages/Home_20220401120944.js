import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';
import Form from 'react-bootstrap/Form';





function Home() {
  const [latest, setLatest]=useState([]);
  const [result, setResult]=useState([]);
  const date = new Date(parseInt(latest.updated));
  const lastUpdated=date.toString();



  useEffect(() => {
    axios
    .all([
    axios.get('https://disease.sh/v3/covid-19/all')
    ])
    .then(responseArr => {
      setLatest(responseArr[0].data);
      setResult(responseArr[1].data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);



  return (
    
    <div className="all">

  <CardGroup>
  <Card bg="primary" text="white" className="text-center" style={{margin: "10px", width: "44rem", height: "44rem"}}>
    <Card.Body>
      <Card.Title style={{fontSize:"50px"}}>Cases</Card.Title>
      <Card.Text>
        {latest.cases}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg="danger" text="white" className="text-center" style={{margin: "10px", width: "44rem", height: "44rem"}}>
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
        {latest.deaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small> Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg="success" text="white" className="text-center" style={{margin: "10px", width: "44rem", height: "44rem"}}>
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
        {latest.recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
</CardGroup>


   </div>
  );
};

export default Home;
