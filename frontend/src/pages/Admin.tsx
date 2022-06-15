import { Container } from '@mui/material';
import { useStyle } from './styles';
import React from "react";

export default function Admin() {
  const classes = useStyle();
  return (
    <div className={classes.main}>
      <h1 className={classes.title} style={{ fontFamily: 'Monospace' }}>Administation Side</h1>
    </div>
  );
}
