import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {NavigationBar} from "./Pages/Home"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NavigationBar}/>

      </Switch>
    </Router>
  );
}

export default App;
