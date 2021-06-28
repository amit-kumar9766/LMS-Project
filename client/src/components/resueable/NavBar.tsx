import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export const NavBar = React.memo(({ history }: any) => {
  const routes = ["/login", "/signup", "/"];

  return (
    <AppBar position="static">
      <Toolbar>
        {routes.map((route: string, index: number) => {
          return (
            <Button
              onClick={() => {
                history.push(route);
              }}
            ></Button>
          );
        })}
      </Toolbar>
    </AppBar>
  );
});
