
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Component/Home/Home';
import TeamDetail from './Component/TeamDetail/TeamDetail';
import NoMatch from './NoMatch/NoMatch';


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home> 
          </Route>
          <Route path="/team/:idTeam">
            <TeamDetail></TeamDetail>
          </Route>
          <Route path ="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch> 
      </Router>
      
    </div>
  );
}

export default App;
