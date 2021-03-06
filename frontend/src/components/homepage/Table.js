import { Icon, Label, Menu, Table, Search, Dropdown } from 'semantic-ui-react'
import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function ScheduleTable (props) {

  const [displayedFlights, setDisplayedFlights] = useState([]);
  const [arrFlights, setArrFlights] = useState([]);
  const [depFlights, setDepFlights] = useState([]);
  const [board, setBoard] = useState("Departures");
  const [filter, setFilter] = useState("Location")

  const boardOptions = [
    {
      key: 'Departures',
      text: 'Departures',
      value: 'Departures'
    },
    {
      key: 'Arrivals',
      text: 'Arrivals',
      value: 'Arrivals'
    }
  ]

  const filterOptions = [
    {
      key: 'Location',
      text: 'Location',
      value: 'Location'
    },
    {
      key: 'Airline',
      text: 'Airline',
      value: 'Airline'
    }
  ]

  const getAirlineName = (airline_id) => {

    let res = props.airlines.find(element => element.ID === airline_id);
    console.log(res, props.airlines);
    if (res === undefined)
      return {ID: '', AL_NAME: '', CODE: ''}
    return res;

  }

  function setDisplay (){

    let requiredFlights;

    if(board=="Departures"){    
      requiredFlights = depFlights;
    }
    else{
      requiredFlights = arrFlights;
    }

    return requiredFlights;
  }

  useEffect(()=>{

    let f1,f2;
    console.log(props.flights);

    f1 = props.flights.filter(function(e){
      return e.SOURCE=="MAA";
    });
    f2 = props.flights.filter(function(e){
      return e.DESTINATION=="MAA";
    });

    f1.forEach((obj)=>{
      console.log(obj.AIRLINE_ID);
      obj.air_name=getAirlineName(obj.AIRLINE_ID).AL_NAME;
    })
    f2.forEach((obj)=>{
      obj.air_name=getAirlineName(obj.AIRLINE_ID).AL_NAME;
    })

    setDepFlights(f1);
    setArrFlights(f2);
    console.log(f1,f2);

  },[props.flights, props.airlines])

  useEffect(()=>{

    let reqd;
    console.log(board);

    reqd=setDisplay();

    console.log(reqd);
    setDisplayedFlights(reqd);
    //setDisplayedFlights(props.flights);

  },[props.flights, board, depFlights, arrFlights]);


  const handleSearchChange = (event) =>{

    event.preventDefault();

    let searchTerm=event.target.value;

    if(searchTerm === ""){
      let reqd=setDisplay();
      setDisplayedFlights(reqd);
      return;
    }

    let searchRegExp = new RegExp(searchTerm , 'i');
    let res;

    //console.log(filter, board);

    if (filter == "Location"){

      if(board=="Departures"){
        res = depFlights.filter(function(e){
          return searchRegExp.test(e.DESTINATION);
        });
      }
  
      else{
        res = arrFlights.filter(function(e){
          return searchRegExp.test(e.SOURCE);
        });
      }

    }

    else{

      if(board=="Departures"){
        res = depFlights.filter(function(e){
          return searchRegExp.test(e.air_name);
        });
      }
  
      else{
        res = arrFlights.filter(function(e){
          return searchRegExp.test(e.air_name);
        });
      }
    }

    

    //console.log(res);
    setDisplayedFlights(res);
    //console.log(res);

  }

  const handleBoardChange = (event, result) =>{
    const { name, value } = result || event.target;
    setBoard(value);
  }

  const handleFilterChange = (event, result) =>{
    const { name, value } = result || event.target;
    setFilter(value);
  }


  return (
    <>
    <div style = {{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
      Display:
      <Dropdown
        inline
        selection
        options={boardOptions}
        defaultSelectedLabel={board}
        placeholder={board}
        onChange={handleBoardChange}
        style = {{margin:'1em'}}
      />

      <Search 
        inline
        open={false}
        onSearchChange={handleSearchChange}
        style = {{margin:'1em'}}
      />

      Filter by:
      <Dropdown
        inline
        selection
        options={filterOptions}
        defaultSelectedLabel={filter}
        placeholder={filter}
        onChange={handleFilterChange}
        style = {{margin:'1em'}}
      />  
      </div>
      <Table celled inverted textAlign='center'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Flight Code</Table.HeaderCell>
            <Table.HeaderCell>Source</Table.HeaderCell>
            <Table.HeaderCell>Destination</Table.HeaderCell>
            <Table.HeaderCell>Arrival</Table.HeaderCell>
            <Table.HeaderCell>Departure</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Duration</Table.HeaderCell>
            <Table.HeaderCell>Flight Type</Table.HeaderCell>
            <Table.HeaderCell>Airline</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

        {displayedFlights.map((flight, index) => {

            //let airline_obj=getAirlineName(flight.AIRLINE_ID);
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
                <Table.Cell>{flight.air_name}</Table.Cell>
              </Table.Row>
            );
        })}

        </Table.Body>
    
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='11'>
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
    </>
  )
}