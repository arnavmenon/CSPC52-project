import React from 'react'
import NavBar from '../general/NavBar';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Table2 from './Table2';
import NavBar2 from './NavBar2';


function Base() {

  return (
      <div style={{margin: '20px'}}> 
          <NavBar2/>
          <Table2/>
      </div>
  );
}

export default Base;
