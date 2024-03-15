// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formField: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

function RegisterPage() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      // Handle response data
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.formContainer}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.formField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.formField}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            Register
          </Button>
          <Button
            href="/"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submitButton}
          >
            Back to Home
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default RegisterPage;
