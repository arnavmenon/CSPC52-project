import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Homepage from './components/homepage/Homepage';
import Base from './components/admin/Base';
import Login from './components/auth/Login'
import Register from './components/auth/Register';
import AddNew from './components/admin/AddNew';


function App() {
  return (
    <Router>
    <div className="App">
        <div>
        <Routes>
        <Route path="/" element = {<Homepage />} />
        <Route path="/login" element = { <Login />}/>
        <Route path="/admin" element = { <Base />}/>
        <Route path="/register" element = { <Register />}/>
        <Route path="/add" element = { <AddNew />}/>
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
