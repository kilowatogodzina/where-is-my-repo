import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' component={Search}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
