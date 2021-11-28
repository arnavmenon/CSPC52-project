import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const NavBar2 = () => (
<div class="ui secondary pointing menu">
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
      <Link to="/" class = "ui item">
        Logout
      </Link>
    </div>
  </div>

)

export default NavBar2

