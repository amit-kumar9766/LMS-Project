import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import routes from '../routes'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'end',
  },
  width: {
    width: '90%',
  },
  title: {
    //backgroundColor:'white'
  },
})

export const NavBar = React.memo(() => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.width}>
          Learning Management System
        </Typography>
        <Box className={classes.container}>
          {routes.map((route: any, index: number) => {
            return (
              <Box key={`${route.path} - ${index}`}>
                <Button
                  onClick={() => {
                    history.push(route.path)
                  }}
                  className={classes.title}
                >
                  {route.title}
                </Button>
              </Box>
            )
          })}
        </Box>
      </Toolbar>
    </AppBar>
  )
})
