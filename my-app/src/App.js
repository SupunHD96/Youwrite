import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {NavigationBar} from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NavigationBar}/>
        <Route  path="/signin" component={SignIn}/>
        <Route  path="/signup" component={SignUp}/>
        <Route  exact path="/home" component={NavigationBar}/>
      </Switch>
    </Router>
  );
}

export default App;
