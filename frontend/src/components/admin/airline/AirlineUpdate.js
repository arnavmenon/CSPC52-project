import React, { useState,  useEffect } from 'react'
import NavBar from '../../general/NavBar';
import { Link, useLocation } from "react-router-dom";
import { Button, Checkbox, Form, Header } from 'semantic-ui-react'
import NavBar2 from '../general/NavBar2';



function AirlineUpdate() {
    const [id, setId] = useState()
    const [alName, setAlName] = useState()
    const [code, setCode] = useState()

    const location = useLocation()
    const {x} = location.state
    
    useEffect(() => {
        setId(x.ID)
        setAlName(x.AL_NAME)
        setCode(x.CODE)
    }, [])

 const handleSubmit = (e) => {
    // AP_NAME, ID, STATE, COUNTRY, CITY
    e.preventDefault();
    let res = {
        ID: id,
        AL_NAME: alName, 
        CODE: code
    }
    console.log(res);
}
  return (
      <div style={{margin:'20px'}}>
          <NavBar2/>
          <Header size='large'>Update Entry</Header>
    <div style={{margin: '0 auto', width: '50vw', textAlign:'left'}}>
            
            <Form onSubmit = {handleSubmit}>
            <Form.Field>
                <label>ID</label>
                <input placeholder='ID' 
                value = {id}
                onChange = {(e) => {setId(e.target.value)}}
                />
            </Form.Field>
            <Form.Field>
                <label>AIRLINE NAME</label>
                <input placeholder='AIRLINE NAME' 
                value = {alName}
                onChange = {(e) => {setAlName(e.target.value)}}
                />
            </Form.Field>
            <Form.Field>
                <label>CODE</label>
                <input placeholder='CODE'
                value = {code}
                onChange = {(e) => {setCode(e.target.value)}}
                />
            </Form.Field>
            <Button type='submit'>Add</Button>
            </Form>
    </div>
    </div>
  );
}

export default AirlineUpdate;