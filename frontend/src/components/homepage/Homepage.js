import React, {useState, useEffect} from 'react'
import axios from "axios"
import NavBar from '../general/NavBar';
import ScheduleTable from './Table';
import { Header } from 'semantic-ui-react';
import Base from '../admin/Base'


export default function Homepage() {

  const [flights, setFlights] = useState([]);
  const [airlines, setAirlines] = useState([]);
  const [airport, setAirport] = useState("MAA");

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
        <NavBar/>
        <Header size='huge'>Flight Schedules</Header>
        <ScheduleTable 
        flights={flights} 
        airlines={airlines} 
        airport={airport}
        />
    </div>
  );

}

