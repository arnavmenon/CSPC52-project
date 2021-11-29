import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react';
import NavBar2 from '../general/NavBar2';
import Table2 from './Table2';


function AirlineBase() {

  const [airlines, setAirlines]=useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:3001/api/airline/")
      .then((response)=>{
        setAirlines(response.data);
        console.log(response.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  },[]);

  const deleteHandler = (airline) => {

    alert("Are you sure you want to delete airline code " + airline.CODE + "?");
    
    let f1 = airlines.filter(function(e){
      return e.CODE != airline.CODE;
    });
    
    axios
      .delete(`http://localhost:3001/api/airline/${airline.ID}`)
      .then((response)=>{
        console.log("hi");
        console.log(response.data,f1);
      })
      .catch((err)=>{
        console.log(err);
      })

      setAirlines(f1);

  }
  

  return (
      <div style={{padding: '20px'}}> 
          <NavBar2 tab_name="Airlines"/>
          <Table2
            airlines={airlines}
            deleteHandler={deleteHandler}
          />
          <div style ={{margin: '1em'}}>
          <Link to="add" class = "ui item">
            <Button icon labelPosition='left' color='green'>
                <Icon name='plus'/>
                   Add
                </Button>
          </Link>

          </div>
      </div>
  );
}

export default AirlineBase;
