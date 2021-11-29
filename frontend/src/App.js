import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Homepage from './components/homepage/Homepage';
import FlightBase from './components/admin/flight/FlightBase';
import Login from './components/auth/Login'
import Register from './components/auth/Register';
import FlightAdd from './components/admin/flight/FlightAdd';
import AirlineAdd from './components/admin/airline/AirlineAdd';
import AiportAdd from './components/admin/airport/AirportAdd';
import AirlineBase from './components/admin/airline/AirlineBase';
import AirportBase from './components/admin/airport/AirportBase';
import FlightUpdate from './components/admin/flight/FlightUpdate';
import AirlineUpdate from './components/admin/airline/AirlineUpdate';
import AirportUpdate from './components/admin/airport/AirportUpdate';
import image from "./assets/image.jpg"

function App() {
  return (
    <Router>
    <div className="App" style={{backgroundImage: `url(${image})`, height: "100vh"}}>
        <div>
        <Routes>
        <Route path="/" element = {<Homepage />} />
        <Route path="/login" element = { <Login />}/>
        <Route path="/register" element = { <Register />}/>
        <Route path="/admin/flight" element = { <FlightBase />}/>
        <Route path="/admin/airline" element = { <AirlineBase />}/>
        <Route path="/admin/airport" element = { <AirportBase />}/>
        <Route path="/admin/flight/add" element = { <FlightAdd />}/>
        <Route path="/admin/airline/add" element = { <AirlineAdd />}/>
        <Route path="/admin/airport/add" element = { <AiportAdd />}/>
        <Route path="/admin/flight/update" element = { <FlightUpdate />}/>
        <Route path="/admin/airline/update" element = { <AirlineUpdate />}/>
        <Route path="/admin/airport/update" element = { <AirportUpdate />}/>
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
