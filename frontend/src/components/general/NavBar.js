import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Icon, Header } from 'semantic-ui-react';
const NavBar = () => (
<div class="ui secondary pointing menu">
    <Link 
    to="/"
    class = "item">
      <Header as='h2'>
        Home
      </Header>
    </Link>
    <div class="right menu">
      <Link to="/login" class = "ui item">
        Login
      </Link>
    </div>
  </div>

)

export default NavBar

