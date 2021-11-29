import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'

const ScheduleTable = (props) => {
  let k = props.data.flights
  const [flights, setFlights] = useState([])

  useEffect(() => {
    setFlights(k)
  },[props.data.flights])


  const getAirlineName = (airline_id) => {
    let res = props.data.airlines.find(element => element.ID === airline_id);
    if (res === undefined)
      return {ID: '', AL_NAME: '', CODE: ''}
    return res;
  }


  const deleteHandler = (flight) => {
    
    let f1 = flights.filter(function(e){
      return e.FLIGHT_CODE != flight.FLIGHT_CODE;
    });
    console.log(f1);
    axios
      .delete(`http://localhost:3001/api/flight/${flight.FLIGHT_CODE}`)
      .then((response)=>{
        setFlights(f1);
        //console.log(response.data);
      })
      .catch((err)=>{
        console.log(err);
      })

  }



  return (
  <Table celled inverted style = {{width: '95vw', margin: '0 auto'}}>
    <Table.Header>
      <Table.Row>
      {/* FLIGHT_CODE, SOURCE, DESTINATION, ARRIVAL, DEPARTURE, STATUS, DURATION, FLIGHTTYPE */}
        <Table.HeaderCell>Flight_Code</Table.HeaderCell>
        <Table.HeaderCell>Source</Table.HeaderCell>
        <Table.HeaderCell>Destination</Table.HeaderCell>
        <Table.HeaderCell>Arrival</Table.HeaderCell>
        <Table.HeaderCell>Departure</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Duration</Table.HeaderCell>
        <Table.HeaderCell>Flight_Type</Table.HeaderCell>
        <Table.HeaderCell>Airline</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {flights.map((flight, index) => {

      let airline_obj=getAirlineName(flight.AIRLINE_ID);
      //console.log(airline_obj);
      return (
      <Table.Row>
      <Table.Cell>{flight.FLIGHT_CODE}</Table.Cell>
      <Table.Cell>{flight.SOURCE}</Table.Cell>
      <Table.Cell>{flight.DESTINATION}</Table.Cell>
      <Table.Cell>{flight.START_TIME}</Table.Cell>
      <Table.Cell>{flight.END_TIME}</Table.Cell>
      <Table.Cell>{flight.STATUS}</Table.Cell>
      <Table.Cell>{flight.DURATION}</Table.Cell>
      <Table.Cell>{flight.FLIGHT_TYPE}</Table.Cell>
      <Table.Cell>{airline_obj.AL_NAME}</Table.Cell>
      <Table.Cell>
         <Button.Group>
           <Link to = 'update' state = {{...flight, airline_obj}}>
             <Button color = 'blue'>Update</Button>
           </Link>
             <Button color = 'red' onClick = {() => deleteHandler(flight)}>Remove</Button>
         </Button.Group>
     </Table.Cell>
      </Table.Row>
      );
      })}
      
    </Table.Body>

    <Table.Footer>
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
    </Table.Footer>
  </Table>
)}

export default ScheduleTable