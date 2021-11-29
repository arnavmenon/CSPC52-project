import React, {useState, useEffect} from 'react'
import NavBar from '../../general/NavBar';
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import { Button, Checkbox, Form, Header } from 'semantic-ui-react'
import NavBar2 from '../general/NavBar2';



function AirportAdd() {
    const [airn, setAirn] = useState()
    const [id, setId] = useState()
    const [sta, setSta] = useState()
    const [country, setCountry] = useState()
    const [city, setCity] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        // AP_NAME, ID, STATE, COUNTRY, CITY
        
        e.preventDefault();
        let res = {
            ap_name:airn,
            id: id, state: sta, country: country, city: city
        }
        console.log(res);
        axios
        .post("http://localhost:3001/api/airport/", res)
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })

    alert("New airport added successfully!");
    // window.location.href = 'http://localhost:3000/admin/airport'
    navigate('/admin/airport')
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