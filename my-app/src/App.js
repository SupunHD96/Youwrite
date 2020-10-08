import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {NavigationBar} from "./Pages/Home";
import SignIn from "./Pages/SignIn"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NavigationBar}/>
        <Route  path="/signin" component={SignIn}/>
      </Switch>
    </Router>
  );
}

export default App;
