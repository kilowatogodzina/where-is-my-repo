import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './pages/Search';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/details'>
            <Details />
          </Route>
          <Route path='/'>
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
