import React from 'react'
import axios from 'axios';
import { Form, Header } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link, useNavigate } from "react-router-dom";
const NavBar2 = (props) => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    console.log('logout initiated.')
    axios
        .get("http://localhost:3001/admin/logout/")
        .then((response)=>{
            console.log(response);
            navigate('/')
        })
        .catch((err)=>{
            console.log(err);
        })
    
  }
  
return (

<div class="ui secondary pointing menu">
    <div>
      <Header as='h2'>
        {props.tab_name}
      </Header>
        
    </div>
    <div class="right menu">
      <Link to="/admin/flight" class = "ui item">
        Flight
      </Link>
      <Link to="/admin/airline" class = "ui item">
        Airline
      </Link>
      <Link to="/admin/airport" class = "ui item">
        Airport
      </Link>
      <Form onSubmit = {() => handleSubmit()}>
      <button type="submit" class = "ui item">
        Logout
      </button>
      </Form>
    </div>
  </div>

)}

export default NavBar2

