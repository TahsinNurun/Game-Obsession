
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Component/Home/Home';
import TeamDetail from './Component/TeamDetail/TeamDetail';


function App() {
  return (
    <div>
      <Router>
        <Switch>
        
          <Route path="/home">
            <Home></Home> 
          </Route>
          <Route path="/team/:idTeam">
            <TeamDetail></TeamDetail>
          </Route>
        </Switch> 
      </Router>
      
    </div>
  );
}

export default App;
