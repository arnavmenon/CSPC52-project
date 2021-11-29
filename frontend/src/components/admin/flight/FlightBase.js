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

  return (
      <div style={{margin: '20px'}}> 
          <NavBar2 />
          <Table2
          data = {{flights, airlines}}
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
