import React, {useState, useEffect} from 'react'
import axios from 'axios';
import NavBar from '../general/NavBar';
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form } from 'semantic-ui-react'



function Register() {
  const [username, setUsername] = useState()
  const [pass, setPass] = useState()
  const [pass2, setPass2] = useState()
  const navigate = useNavigate()

  useEffect(() => {

    if(localStorage.getItem("loggedIn") == "true"){
      navigate('/admin/flight');
    }
  })

  const handleSubmit = (e) => {
    // AP_NAME, ID, STATE, COUNTRY, CITY
    e.preventDefault();
    if(pass === pass2){
      let res = {
        username: username,
        password: pass
      }
      console.log(res);
      axios
        .post("http://localhost:3001/admin/register", res)
        .then((response)=>{
            console.log(response.status);
            localStorage.setItem('loggedIn', "true");
            alert("new user added.");
            navigate('/admin/flight')
        })
        .catch((err)=>{
            console.log(err);
            alert("Unable to register!");
        })


    }
    else{
      navigate('/register')
    }
    
}

 
  return (
    <div style={{padding: '20px'}}>


    <NavBar/>
  <div style = {{width: '100vw', height: '60vh', display: 'flex', alignItems: "center", justifyContent: "center"}}>

    <div className="Register" style = {{width: '20vw', backgroundColor: '#A9A9A9', padding: '15px', boxShadow:"0 0 20px #A9A9A9"}}>  
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
    <Form.Field>
      <label>Confirm Password</label>
      <input type = 'password' 
      value = {pass2}
      onChange = {(e) => {setPass2(e.target.value)}}
      />
    </Form.Field>
    <Button type = 'submit' >
        Register
    </Button>
  </Form>
    </div>
    </div>
    </div>
  );
}

export default Register;
