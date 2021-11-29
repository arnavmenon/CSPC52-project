import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';

const ScheduleTable = (props) => {

  const [displayedAirlines, setDisplayedAirlines] = useState([]);

  useEffect(()=>{

    setDisplayedAirlines(props.airlines);
    console.log(props.airlines)

  },[props.airlines]);


  return(
  <Table celled inverted style = {{width:'max-content', margin: '0 auto'}} textAlign='center'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Airline Name</Table.HeaderCell>
        <Table.HeaderCell>Airline Code</Table.HeaderCell>
        <Table.HeaderCell>ACTIONS</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {displayedAirlines.map((airline,index) => {

        return (
          <Table.Row  key = {index}>	
            <Table.Cell>{airline.ID}</Table.Cell>
            <Table.Cell>{airline.AL_NAME}</Table.Cell>
            <Table.Cell>{airline.CODE}</Table.Cell>
            <Table.Cell>
                <Button.Group>
                <Link to = 'update' state = {{...airline}}>
                    <Button color = 'blue'>Update</Button>
                </Link>   
                    <Button color = 'red' onClick = {() => props.deleteHandler(airline)}>Remove</Button>
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
)}

export default ScheduleTable