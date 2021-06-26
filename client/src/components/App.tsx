import React, { useEffect, useState } from "react";
import axios from "axios";
import { Signup } from "./Authentication/Signup";
import { Login } from "./Authentication/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/user`);
      if (response?.data) {
        setData(response?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="app">
      <Router>
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
      {data}
    </div>
  );
};

export default App;
