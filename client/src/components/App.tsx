import React from 'react';
import { Signup } from "./Authentication/Signup";
import { Login } from "./Authentication/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavBar } from "./resueable/NavBar";

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
