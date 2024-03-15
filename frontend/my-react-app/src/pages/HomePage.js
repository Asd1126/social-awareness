// src/pages/HomePage.js
import React from 'react';
import { Container, Typography } from '@material-ui/core';

function HomePage() {
  return (
    <div>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>Welcome to Our Website</Typography>
      </Container>
    </div>
  );
}

export default HomePage;
