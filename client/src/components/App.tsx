import React from "react";
import { Signup } from "./Authentication/Signup";
import { Login } from "./Authentication/Login";
import { NavBar } from "./resueable/NavBar";
import { ContextProvider } from "../context/contextStore/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import routes from "./routes";

const RenderRoute = (route: any) => {
  const history = useHistory();
  if (route.needsAuth) {
    history.push("/login");
  }
  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    ></Route>
  );
};

const App = () => {
  return (
    <div className="app">
      <ContextProvider>
        <Router>
          <NavBar />
          <div>
            <Switch>
              {routes.map((route: any, index: number) => (
                <RenderRoute {...route} key={`${route?.path} - ${index}`} />
              ))}
            </Switch>
          </div>
        </Router>
      </ContextProvider>
    </div>
  );
};

export default App;
