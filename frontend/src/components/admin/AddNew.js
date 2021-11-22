import React from 'react'
import NavBar from '../general/NavBar';
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Header } from 'semantic-ui-react'
import NavBar2 from './NavBar2';



function AddNew() {

  return (
      <div style={{margin:'20px'}}>
          <NavBar2/>
          <Header size='large'>Add New Entry</Header>
    <div style={{margin: '0 auto', width: '50vw', textAlign:'left'}}>
            
            <Form>
            <Form.Field>
                <label>Flight Code</label>
                <input placeholder='Flight_Code' />
            </Form.Field>
            <Form.Field>
                <label>Destination</label>
                <input placeholder='Destination' />
            </Form.Field>
            <Form.Field>
                <label>Arrival</label>
                <input placeholder='Arrival' />
            </Form.Field>
            <Form.Field>
                <label>Departure</label>
                <input placeholder='Departure' />
            </Form.Field>
            <Form.Field>
                <label>Status</label>
                <input placeholder='Status' />
            </Form.Field>
            <Form.Field>
                <label>Duration</label>
                <input placeholder='Duration' />
            </Form.Field>
            
            <Form.Field>
                <label>Duration</label>
                <input placeholder='Duration' />
            </Form.Field>
            
            <Form.Field>
                <label>Flight Type</label>
                <input placeholder='Flight_Type' />
            </Form.Field>
            
            <Form.Field>
                <label>Layover Time</label>
                <input placeholder='Layover Time' />
            </Form.Field>
            <Form.Field>
                <label>No of stops</label>
                <input placeholder='No_of_stops' />
            </Form.Field>
            <Form.Field>
                <label>Airline</label>
                <input placeholder='Airline' />
            </Form.Field>
            <Button type='submit'>Add</Button>
            </Form>
    </div>
    </div>
  );
}

export default AddNew;