import {
  Box,
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

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
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
          onChange={(e)=>setName(e.target.value)}
        ></TextField>

        <TextField
          variant="outlined"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="lname"
        ></TextField>

        <Button type="submit" fullWidth variant="contained" color="primary">
          Log In
        </Button>
      </Container>
    </>
  );
};
