import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react'
import Table2 from './Table2';
import NavBar2 from '../general/NavBar2';


function Base() {
  const [flights, setFlights] = useState([]);
  const [airlines, setAirlines] = useState([]);

  useEffect(()=>{

    axios
      .get("http://localhost:3001/api/flight/")
      .then((response)=>{
        setFlights(response.data);
        //console.log(response.data);
      })
      .catch((err)=>{
        console.log(err);
      })

  },[])

  useEffect(()=>{

    axios
      .get("http://localhost:3001/api/airline/")
      .then((response)=>{
        setAirlines(response.data);
        //console.log(response.data);
      })
      .catch((err)=>{
        console.log(err);
      })

  },[])

  const deleteHandler = (flight) => {

    alert("Are you sure you want to delete flight code " + flight.FLIGHT_CODE + "?");
    
    let f1 = flights.filter(function(e){
      return e.FLIGHT_CODE != flight.FLIGHT_CODE;
    });
    
    axios
      .delete(`http://localhost:3001/api/flight/${flight.FLIGHT_CODE}`)
      .then((response)=>{
        console.log("hi");
        console.log(response.data,f1);
      })
      .catch((err)=>{
        console.log(err);
      })

      setFlights(f1);

  }

  return (
      <div style={{margin: '20px'}}> 
          <NavBar2 />
          <Table2
          flights={flights}
          airlines={airlines}
          deleteHandler={deleteHandler}
          />
          <div style ={{margin: '1em'}}>
          <Link to="add" class = "ui item">
            <Button icon labelPosition='left'>
                <Icon name='plus' />
                   Add
                </Button>
          </Link>

          </div>
          
      </div>
  );
}

export default Base;
