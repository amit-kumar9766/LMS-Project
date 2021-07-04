import {
  Box,
  Button,
  Container,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { useStore } from "../../context/contextStore/index";
import axios from "axios";

const useStyles = makeStyles({
  title: {
    paddingTop: "2rem",
    paddingBottom: "1rem",
  },
  grid: {
    paddingBottom: "1rem",
  },
});

export const Signup = () => {
  const classes = useStyles();
  const { state, dispatch }: any = useStore();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    let signObj = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };
    try {
      setDisabled(true);
      const response = await axios.post(
        `http://localhost:5000/api/auth/signup`,
        signObj
      );
      if (response?.status === 200) {
        //redirect to login
      }
    } catch (err) {
      console.log(err);
      //dispatch here
    } finally {
      setDisabled(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <Typography component="h2" variant="h5" className={classes.title}>
          Sign up
        </Typography>
        <form onSubmit={handleSignUp}>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label=" Name"
                value={name}
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="passwordConfirmation"
                variant="outlined"
                required
                fullWidth
                id="passwordConfirmation"
                label="passwordConfirmation"
                type="password"
                value={passwordConfirmation}
                autoFocus
                error={password !== passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={disabled}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};
