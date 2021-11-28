import React from 'react'
import { Link } from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react'
import Table2 from './Table2';
import NavBar2 from '../general/NavBar2';


function Base() {

  return (
      <div style={{margin: '20px'}}> 
          <NavBar2 />
          <Table2
          data = {[
            {
              FLIGHT_CODE: 'AI2014', SOURCE: 'MAA', DESTINATION: 'JFK', ARRIVAL: '02:10', DEPARTURE: '23:15', STATUS: 'On-time', 
              DURATION: '23hr', FLIGHTTYPE: 'Non-stop', AIRLINE: 'Air India'
            },
            {
              FLIGHT_CODE: 'AI2015', SOURCE: 'MAA', DESTINATION: 'JFK', ARRIVAL: '02:15', DEPARTURE: '23:15', STATUS: 'On-time', 
              DURATION: '23hr', FLIGHTTYPE: 'Non-stop', AIRLINE: 'Air India'
            }
          ]}
          />
          <div style ={{margin: '1em'}}>
          <Link to="add" class = "ui item">
            <Button icon labelPosition='left'>
                <Icon name='plus' />
                   Add
                </Button>
          </Link>

          </div>
          
      </div>
  );
}

export default Base;
