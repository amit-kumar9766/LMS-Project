import {
  Button,
  Box,
  Container,
  FormControlLabel,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useStore } from '../../context/contextStore/index'
import { loginAction } from '../../context/actions/authActions'
import { loadingAction } from '../../context/actions/loadingAction'
import { Loading } from '../resueable/Loading'

const useStyles = makeStyles({
  title: {
    paddingTop: '2rem',
    paddingBottom: '1rem',
  },
  grid: {
    paddingBottom: '1rem',
  },
})

export const Login = React.memo(() => {
  const classes = useStyles()
  const { authState, authDispatch }: any = useStore()
  const { loading, loadingDispatch }: any = useStore()
  const [disabled, setDisabled] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  console.log(loading)

  const handleLogin = async (event: any) => {
    event.preventDefault()
    let loginObj = { email: email, password: password }
    try {
      setDisabled(true)
      const response = await axios.post(
        `http://localhost:5000/api/auth/signin`,
        loginObj,
      )
      if (response?.status === 200) {
        authDispatch(loginAction(response?.data))
      }
    } catch (err) {
      console.log(err)
    } finally {
      setDisabled(false)
    }
  }

  if (loading.loading) {
    return <Loading />
  }

  return (
    <>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h5" className={classes.title}>
          Log In
        </Typography>
        <Box>
          <Box className={classes.grid}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </Box>
          <Box className={classes.grid}>
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
          </Box>
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={(e) => handleLogin(e)}
          disabled={disabled}
        >
          Log In
        </Button>
      </Container>
    </>
  )
})
