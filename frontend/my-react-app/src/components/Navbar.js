// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Button, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'flex-end',
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Link to="/" style={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
          <Typography variant="h6">My App Title</Typography>
        </Link>
        <Link to="/login" className={classes.link}>
          <Button color="inherit">Login</Button>
        </Link>
        <Link to="/register" className={classes.link}>
          <Button color="inherit">Register</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
