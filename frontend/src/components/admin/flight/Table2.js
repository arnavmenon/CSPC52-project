import React from 'react'
import { Link } from 'react-router-dom';
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'

const ScheduleTable = (props) => {
  let k = props.data
  let res = [];
  k.map((x, index) => {
    res.push(
    <Table.Row key = {index}>
    				
    <Table.Cell>{x.FLIGHT_CODE}</Table.Cell>
    <Table.Cell>{x.SOURCE}</Table.Cell>
    <Table.Cell>{x.DESTINATION}</Table.Cell>
    <Table.Cell>{x.ARRIVAL}</Table.Cell>
    <Table.Cell>{x.DEPARTURE}</Table.Cell>
    <Table.Cell>{x.STATUS}</Table.Cell>
    <Table.Cell>{x.DURATION}</Table.Cell>
    <Table.Cell>{x.FLIGHTTYPE}</Table.Cell>
    <Table.Cell>{x.AIRLINE}</Table.Cell>
    <Table.Cell>
        <Button.Group>
          <Link to = 'update' state = {{x}}>
            <Button color = 'blue'>Update</Button>
          </Link>
            <Button color = 'red'>Remove</Button>
        </Button.Group>
    </Table.Cell>
  </Table.Row>
    )
})
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
      {
        res
      }
      {/* <Table.Row>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>
            <Button.Group>
                <Button color = 'blue'>Update</Button>
                <Button color = 'red'>Remove</Button>
            </Button.Group>
        </Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>
            <Button.Group>
                <Button color = 'blue'>Update</Button>
                <Button color = 'red'>Remove</Button>
            </Button.Group>
        </Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>
            <Button.Group>
                <Button color = 'blue'>Update</Button>
                <Button color = 'red'>Remove</Button>
            </Button.Group>
        </Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>
            <Button.Group>
                <Button color = 'blue'>Update</Button>
                <Button color = 'red'>Remove</Button>
            </Button.Group>
        </Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>
            <Button.Group>
                <Button color = 'blue'>Update</Button>
                <Button color = 'red'>Remove</Button>
            </Button.Group>
        </Table.Cell>
        
      </Table.Row> */}
      


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