import React, {useState, userEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Button, Form, Header } from 'semantic-ui-react';
import NavBar2 from '../general/NavBar2';



function FlightAdd() {
const [code, setCode] = useState('')
const [src, setSrc] = useState('')
const [dest, setDest] = useState('')
const [arr, setArr] = useState('')
const [depa, setDepa] = useState('')
const [stat, setStat] = useState('')
const [dur, setDur] = useState('')
const [fli, setFli] = useState('')
const [airl, setAirl] = useState('')


const handleSubmit = (e) => {
    // FLIGHT_CODE, SOURCE, DESTINATION, ARRIVAL, DEPARTURE, STATUS, DURATION, FLIGHTTYPE, AIRLINE
    e.preventDefault();
    let res = {
        FLIGHT_CODE: code,
        SOURCE: src, DESTINATION: dest, ARRIVAL:arr, 
        DEPARTURE: depa, STATUS:stat, DURATION:dur, 
        FLIGHTTYPE:fli, AIRLINE:airl
    }
    console.log(res);
}

let location = useLocation()
let res = [];

  return (
      <div style={{margin:'20px'}}>
          <NavBar2/>
          <Header size='large'>Add New Entry</Header>
    <div style={{margin: '0 auto', width: '50vw', textAlign:'left'}}>
            
            <Form onSubmit = {handleSubmit}>
            <Form.Field>
                <label>Flight Code</label>
                <input placeholder='Flight_Code'
                value = {code}
                onChange = {(e) => setCode(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Source</label>
                <input placeholder='Source' 
                value = {src}
                onChange = {(e) => setSrc(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Destination</label>
                <input placeholder='Destination'
                value = {dest} 
                onChange = {(e) => setDest(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Arrival</label>
                <input placeholder='Arrival' 
                value = {arr}
                onChange = {(e) => setArr(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Departure</label>
                <input placeholder='Departure' 
                value = {depa}
                onChange = {(e) => setDepa(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Status</label>
                <input placeholder='Status' 
                value = {stat}
                onChange = {(e) => setStat(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Duration</label>
                <input placeholder='Duration' 
                value = {dur}
                onChange = {(e) => setDur(e.target.value)}
                />
            </Form.Field>
            
            <Form.Field>
                <label>Flight Type</label>
                <input placeholder='Flight_Type' 
                value = {fli}
                onChange = {(e) => setFli(e.target.value)}
                />
            </Form.Field>
            
            <Form.Field>
                <label>Airline</label>
                <input placeholder='Airline' 
                value = {airl}
                onChange = {(e) => setAirl(e.target.value)}
                />
            </Form.Field>
            <Button type='submit'>Add</Button>
            </Form>
    </div>
    </div>
  );
}

export default FlightAdd;