import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react';
import NavBar2 from '../general/NavBar2';
import Table2 from './Table2';


function AirportBase() {

  const [airports, setAirports]=useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:3001/api/airport/")
      .then((response)=>{
        setAirports(response.data);
        console.log(response.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  },[]);

  const deleteHandler = (airport) => {

    alert("Are you sure you want to delete airport ID " + airport.ID + "?");
    
    let f1 = airports.filter(function(e){
      return e.ID != airport.ID;
    });
    
    axios
      .delete(`http://localhost:3001/api/airport/${airport.ID}`)
      .then((response)=>{
        console.log("hi");
        console.log(response.data,f1);
      })
      .catch((err)=>{
        console.log(err);
      })

      setAirports(f1);

  }

  return (
      <div style={{padding: '20px'}}> 
          <NavBar2 tab_name="Airports"/>
          <Table2 airports={airports}
            deleteHandler={deleteHandler}
          />
          <div style ={{margin: '1em'}}>
          <Link to="add" class = "ui item">
            <Button icon labelPosition='left' color='green'>
                <Icon name='plus' />
                   Add
                </Button>
          </Link>

          </div>
      </div>
  );
}

export default AirportBase;
