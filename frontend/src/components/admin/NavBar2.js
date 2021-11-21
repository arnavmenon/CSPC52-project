import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const NavBar2 = () => (
<div class="ui secondary pointing menu">
    <div class="right menu">
      <Link to="/add" class = "ui item">
        Add New
      </Link>
      <Link to="/" class = "ui item">
        Logout
      </Link>
    </div>
  </div>

)

export default NavBar2

