import NavBar from '../general/NavBar';
import ScheduleTable from './Table';
import { Header } from 'semantic-ui-react';
import Base from '../admin/Base'
function Homepage() {
  return (
    <div style={{margin: '20px'}}>
        <NavBar/>
        <Header size='huge'>Flight Schedules</Header>
        <ScheduleTable/>
    </div>
  );
}

export default Homepage;
