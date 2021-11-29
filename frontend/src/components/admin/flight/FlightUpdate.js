import React, {useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Header } from 'semantic-ui-react';
import NavBar2 from '../general/NavBar2';
import axios from "axios"


function FlightUpdate() {
    const [code, setCode] = useState('')
    const [src, setSrc] = useState('')
    const [dest, setDest] = useState('')
    const [arr, setArr] = useState('')
    const [depa, setDepa] = useState('')
    const [stat, setStat] = useState('')
    const [dur, setDur] = useState('')
    const [fli, setFli] = useState('')
    const [airl, setAirl] = useState('')

    const [airlines, setAirlines] = useState([]);
    const [airports, setAirports] = useState([]);
    const navigate = useNavigate()

    const location = useLocation()
    const x = location.state
    console.log(x);

    useEffect(() => {
        setCode(x.FLIGHT_CODE)
        setSrc(x.SOURCE)
        setDest(x.DESTINATION)
        setArr(x.START_TIME)
        setDepa(x.END_TIME)
        setStat(x.STATUS)
        setDur(x.DURATION)
        setFli(x.FLIGHT_TYPE)
        setAirl(x.airline_obj.ID)
    }, [])

    useEffect(() => {

        axios
        .get("http://localhost:3001/api/airline/")
        .then((response)=>{
            setAirlines(response.data);
            console.log(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })

        axios
        .get("http://localhost:3001/api/airport/")
        .then((response)=>{
            setAirports(response.data);
            console.log(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })  

    },[])

    const handleSubmit = () => {
        // FLIGHT_CODE, SOURCE, DESTINATION, ARRIVAL, DEPARTURE, STATUS, DURATION, FLIGHTTYPE, AIRLINE
        let res = {
            flight_code: code,
            src: src, dest: dest, start_time:arr, 
            end_time: depa, status:stat, duration:dur, 
            flight_type:fli, airline_id:airl
        }
        
        console.log(res);

        axios
            .put(`http://localhost:3001/api/flight/${code}`, res)
            .then((response)=>{
                console.log(response);
            })
            .catch((err)=>{
                console.log(err);
            })

        alert("Flight updated successfully!");
        navigate('/admin/flight');
    }


    return (
        <div style={{margin:'20px'}}>
            <NavBar2/>
            <Header size='large'>Update Entry</Header>
        <div style={{margin: '0 auto', width: '50vw', textAlign:'left'}}>
                
                <Form onSubmit = {handleSubmit}>
                <Form.Field>
                    <label>Flight Code</label>
                    <input placeholder='Flight_Code'
                    value = {code}
                    /* onChange = {(e) => setCode(e.target.value)} */
                    disabled
                    />
                </Form.Field>
                <Form.Field>
                    <label>Source</label>
                    {/* <input placeholder='Source' 
                    value = {src}
                    onChange = {(e) => setSrc(e.target.value)}
                    /> */}
                    <select name="src" id="src" onChange = {(e) => setSrc(e.target.value)}>
                        {
                            airports.map((airport,index) => {

                                if(src == airport.ID)
                                    return (
                                        <option value={airport.ID} selected>
                                            {airport.ID} ({airport.AP_NAME})
                                        </option>
                                    )
                                else
                                    return(
                                        <option value={airport.ID}>
                                            {airport.ID} ({airport.AP_NAME})
                                        </option>
                                    )
                            })
                        }
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Destination</label>
                    <select name="dest" id="dest" onChange = {(e) => setDest(e.target.value)}>
                        {
                            airports.map((airport,index) => {

                                if(dest == airport.ID)
                                    return (
                                        <option value={airport.ID} selected>
                                            {airport.ID} ({airport.AP_NAME})
                                        </option>
                                    )
                                else
                                    return(
                                        <option value={airport.ID}>
                                            {airport.ID} ({airport.AP_NAME})
                                        </option>
                                    )
                            })
                        }
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Arrival</label>
                    <input placeholder='Arrival' 
                    value = {arr}
                    onChange = {(e) => setArr(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Departure</label>
                    <input placeholder='Departure' 
                    value = {depa}
                    onChange = {(e) => setDepa(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Status</label>
                    {/* <input placeholder='Status' 
                    value = {stat}
                    onChange = {(e) => setStat(e.target.value)}
                    /> */}
                    <select name="status" id="status" onChange = {(e) => setStat(e.target.value)} value={stat}>
                        <option disabled selected value>Select flight status</option>
                        <option  value="On-time">On-time</option>
                        <option  value="Delayed">Delayed</option>
                        <option  value="Boarding">Boarding</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Duration</label>
                    <input placeholder='Duration' 
                    value = {dur}
                    onChange = {(e) => setDur(e.target.value)}
                    />
                </Form.Field>
                
                <Form.Field>
                    <label>Flight Type</label>
                    {/* <input placeholder='Flight_Type' 
                    value = {fli}
                    onChange = {(e) => setFli(e.target.value)}
                    /> */}
                    <select name="flight_type" id="flight_type" onChange = {(e) => setFli(e.target.value)} value={fli}>
                        <option disabled selected value>Select flight type</option>
                        <option  value="Connecting">Connecting</option>
                        <option  value="Non-stop">Non-stop</option>
                    </select>
                </Form.Field>
                
                <Form.Field>
                    <label>Airline</label>
                    {/* <input placeholder='Airline' 
                    value = {airl}
                    onChange = {(e) => setAirl(e.target.value)}
                    /> */}
                    <select name="airline" id="airline" onChange = {(e) => setAirl(e.target.value)}>
                        {
                            airlines.map((airline,index) => {

                                if(airl == airline.ID)
                                    return (
                                        <option value={airline.ID} selected>
                                            {airline.ID} ({airline.AL_NAME})
                                        </option>
                                    )
                                else
                                    return(
                                        <option value={airline.ID}>
                                            {airline.ID} ({airline.AL_NAME})
                                        </option>
                                    )
                            })
                        }
                    </select>
                </Form.Field>
                <Button type='submit'>Update</Button>
                </Form>
        </div>
        </div>
    );
}

export default FlightUpdate;