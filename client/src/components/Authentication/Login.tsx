import {
  Button,
  Container,
  FormControlLabel,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Email } from "@material-ui/icons";

export const Login =React.memo(() => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (event: any) => {
    event.preventDefault();
    let loginObj = { email: name, password: password };
    try {
      const response = await axios.post(`http://localhost:5000/user`, loginObj);
      if (response?.data) {
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoComplete="fname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></TextField>
        <TextField
          variant="outlined"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={(e) => handleLogin(e)}
        >
          Log In
        </Button>
      </Container>
    </>
  );
});
