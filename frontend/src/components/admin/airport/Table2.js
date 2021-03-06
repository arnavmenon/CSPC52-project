import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';

const ScheduleTable = (props) => {
  const [displayedAirports, setDisplayedAirports] = useState([]);

  useEffect(()=>{

    setDisplayedAirports(props.airports);
    console.log(props.airports)

  },[props.airports]);

return (

  <Table celled inverted style = {{width: 'max-content', margin: '0 auto'}} textAlign='center'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Airport Name</Table.HeaderCell>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>State</Table.HeaderCell>
        <Table.HeaderCell>Country</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>ACTIONS</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {displayedAirports.map((airport,index) => {

    return (
    <Table.Row  key = {index}>	
      <Table.Cell>{airport.AP_NAME}</Table.Cell>
    <Table.Cell>{airport.ID}</Table.Cell>
    <Table.Cell>{airport.STATE}</Table.Cell>
    <Table.Cell>{airport.COUNTRY}</Table.Cell>
    <Table.Cell>{airport.CITY}</Table.Cell>
      <Table.Cell>
          <Button.Group>
          <Link to = 'update' state = {{...airport}}>
              <Button color = 'blue'>Update</Button>
          </Link>   
              <Button color = 'red' onClick = {() => props.deleteHandler(airport)}>Remove</Button>
          </Button.Group>
          </Table.Cell>
    </Table.Row>
    );
    })}
    </Table.Body>

    {/* <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='12'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer> */}
  </Table>
)
}


export default ScheduleTable