import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';

const ScheduleTable = (props) => {
  let k = props.data
  let res = [];
  k.map((x, index) => {
    res.push(
    <Table.Row  key = {index}>
    				
    <Table.Cell>{x.AP_NAME}</Table.Cell>
    <Table.Cell>{x.ID}</Table.Cell>
    <Table.Cell>{x.STATE}</Table.Cell>
    <Table.Cell>{x.COUNTRY}</Table.Cell>
    <Table.Cell>{x.CITY}</Table.Cell>
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

  <Table celled inverted style = {{width: 'max-content', margin: '0 auto'}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>AP_NAME</Table.HeaderCell>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>STATE</Table.HeaderCell>
        <Table.HeaderCell>COUNTRY</Table.HeaderCell>
        <Table.HeaderCell>CITY</Table.HeaderCell>
        <Table.HeaderCell>ACTIONS</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {
    res
    }
    </Table.Body>
{/* 
    
      <Table.Row>
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
        <Table.Cell>cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>
            <Button.Group>
                <Button color = 'blue'>Update</Button>
                <Button color = 'red'>Remove</Button>
            </Button.Group>
        </Table.Cell>
        
      </Table.Row>
      


    </Table.Body> */}

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