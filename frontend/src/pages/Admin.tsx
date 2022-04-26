import { Container } from '@mui/material';
import Navigation from '../route/Navigation';
import { useStyle } from './styles';
import React from "react";

export default function Admin() {
  const classes = useStyle();
  return (
    <Container>
      <h1 className={classes.title}>Administation Side</h1>
      <Navigation />
    </Container>
  );
}
