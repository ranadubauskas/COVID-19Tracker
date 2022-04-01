import React, { useEffect, useState, useRef} from "react";
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

function Map() {
    const [countries, setCountries] = useState([]);
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
  

  const countriesLocations= result.map((data, i) => {
    return (
        <div
            lat={data.countryInfo.lat}
            lng={data.countryInfo.long}
            text="marker"
            style={{
                color: "red",
                backgroundColor: "#FFF",
                height: "25px",
                width: "40px",
                textAlign: "center",
                borderRadius: "30%",
                type: "circle"
            }}
            >
                <img height="10px" src={data.countryInfo.flag} />
                <br />
                {data.cases}
                </div>
  );
});


  return (
    <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyBEP3aTAxNz_xOdIbK5ulQWCoqlGCUC_uA' }}
              defaultCenter={{lat: 35.11, lng: -38.7097}}
              defaultZoom={3}
            >
            {countriesLocations}
            </GoogleMapReact>
          </div>

  );
};

export default Map


    



 