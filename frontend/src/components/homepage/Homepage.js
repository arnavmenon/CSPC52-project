import NavBar from '../general/NavBar';
import ScheduleTable from './Table';
import { useLocation } from 'react-router-dom'
import { Header } from 'semantic-ui-react';
function Homepage(props) {
  
  return (
    <div style={{margin: '20px'}}>
        <NavBar/>
        <Header size='huge'>Flight Schedules</Header>
        <ScheduleTable/>
    </div>
  );
}

export default Homepage;
