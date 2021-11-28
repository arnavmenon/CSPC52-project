import React, {useState, useEffect} from 'react'
import NavBar from '../../general/NavBar';
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Header } from 'semantic-ui-react'
import NavBar2 from '../general/NavBar2';



function AirportAdd() {
    const [airn, setAirn] = useState()
    const [id, setId] = useState()
    const [sta, setSta] = useState()
    const [country, setCountry] = useState()
    const [city, setCity] = useState()


    const handleSubmit = (e) => {
        // AP_NAME, ID, STATE, COUNTRY, CITY
        e.preventDefault();
        let res = {
            AP_NAME:airn,
            ID: id, STATE: sta, COUNTRY: country, CITY: city
        }
        console.log(res);
    }

  return (
      <div style={{margin:'20px'}}>
          <NavBar2/>
          <Header size='large'>Add New Entry</Header>
    <div style={{margin: '0 auto', width: '50vw', textAlign:'left'}}>
            
            <Form onSubmit = {handleSubmit}>
            <Form.Field>
                <label>AIRPORT NAME</label>
                <input placeholder='AIRPORT NAME' 
                value = {airn}
                onChange = {(e) => setAirn(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>ID</label>
                <input placeholder='ID' 
                value = {id}
                onChange = {(e) => setId(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>STATE</label>
                <input placeholder='STATE' 
                value = {sta}
                onChange = {(e) => setSta(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>COUNTRY</label>
                <input placeholder='COUNTRY' 
                value = {country}
                onChange = {(e) => setCountry(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>CITY</label>
                <input placeholder='CITY' 
                value = {city}
                onChange = {(e) => setCity(e.target.value)}/>
            </Form.Field>
            <Button type='submit'>Add</Button>
            </Form>
    </div>
    </div>
  );
}

export default AirportAdd;