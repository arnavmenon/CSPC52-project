import React from 'react'
import { Link } from "react-router-dom";
import { Button, Checkbox, Form,Icon } from 'semantic-ui-react'
import Table2 from './Table2';
import NavBar2 from '../general/NavBar2';


function AirportBase() {

  return (
      <div style={{margin: '20px'}}> 
          <NavBar2/>
          <Table2 data = {[{
            AP_NAME:'JFK',
          	ID: '123',
            STATE:'New York',
            COUNTRY:'USA',
            CITY:'New York'
          },
          {
            AP_NAME:'JFK',
          	ID: '123',
            STATE:'New York',
            COUNTRY:'USA',
            CITY:'New York'
          },
          {
            AP_NAME:'JFK',
          	ID: '123',
            STATE:'New York',
            COUNTRY:'USA',
            CITY:'New York'
          }]}/>
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

export default AirportBase;
