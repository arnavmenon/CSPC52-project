import React, { useState, useEffect } from 'react'
import NavBar from '../general/NavBar';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import sha256 from 'crypto-js/sha256';


function Login(props) {
  const [username, setUsername] = useState()
  const [pass, setPass] = useState()
  const navigate = useNavigate() 

  useEffect(() => {

    if(localStorage.getItem("loggedIn") == "true"){
      navigate('/admin/flight');
    }
  })

  const handleSubmit = (e) => {
    // AP_NAME, ID, STATE, COUNTRY, CITY
    e.preventDefault();
    let res = {
        username: username,
        password: pass
    }
    console.log(res);
    // const history = useHistory()
    axios
        .post("http://localhost:3001/admin/auth", res)
        .then((response)=>{
            console.log(response.status);
            localStorage.setItem('loggedIn', "true");
            alert("Welcome Back!");
            navigate('/admin/flight')
        })
        .catch((err)=>{
            console.log(err);
            alert("Unable to login!");
        })

    
}

  return (
    <div style={{padding: '20px'}}>


    <NavBar/>
  <div style = {{width: '100vw', height: '60vh', display: 'flex', alignItems: "center", justifyContent: "center"}}>

    <div className="Login" style = {{width: '20vw', backgroundColor: '#A9A9A9', padding: '15px', boxShadow:"0 0 20px #A9A9A9"}}>  
    <Form onSubmit = {handleSubmit}>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username'
      value = {username}
      onChange = {(e) => {setUsername(e.target.value)}}
      />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input type = 'password' 
      value = {pass}
      onChange = {(e) => {setPass(e.target.value)}}
      />
    </Form.Field>

    <Button type = 'submit' >
        Login
    </Button>
    <Link to="/register" class = "ui item">
    <Button >
        Register
    </Button>
    </Link>
  </Form>
    </div>
    </div>
    </div>
  );
}

export default Login;
