import React from 'react'
import NavBar from '../general/NavBar';
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from 'semantic-ui-react'



function Register() {

  return (
    <div style={{margin: '20px'}}>


    <NavBar/>
  <div style = {{width: '100vw', height: '60vh', display: 'flex', alignItems: "center", justifyContent: "center"}}>

    <div className="Register" style = {{width: '20vw', backgroundColor: '#A9A9A9', padding: '15px', boxShadow:"0 0 20px #A9A9A9"}}>  
    <Form>
    <Form.Field>
      <label>Username</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input type = 'password' />
    </Form.Field>
    <Form.Field>
      <label>Confirm Password</label>
      <input type = 'password' />
    </Form.Field>
    <Button >
    <Link to="/admin" class = "ui item">
        Register
      </Link>
    </Button>
  </Form>
    </div>
    </div>
    </div>
  );
}

export default Register;
