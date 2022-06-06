import { useStyle } from './style';
import { Card, CardContent, MenuList, IconButton, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { routes } from './route';
import React from "react";

export default function Navigation(): JSX.Element {
  const classes = useStyle();
  return (
    <Card className={classes.container} style={{ backgroundImage: 'linear-gradient(45deg, #1b5abf, rgb(58 52 47))' }}>
      <h1 style={{marginTop: '20px', textAlign: 'center', fontSize: '30px'}}>
        <NavLink to='/admin' className={classes.title}>Store Administration</NavLink>
      </h1>
      <hr />
      <CardContent>
        {routes.map(({ name, path }, index) => (
          <MenuList key={index}>
            <NavLink to={path} className={classes.link}>{name}</NavLink>
            <hr />
          </MenuList>
        ))}
      </CardContent>
    </Card>
  );
}
