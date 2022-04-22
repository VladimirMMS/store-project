import { useStyle } from './style';
import { Card, CardContent,MenuList } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { routes } from './route';
import React from "react";

export default function Navigation(): JSX.Element {
  const classes = useStyle();
  return (
    <Card className={classes.container}>
      <CardContent>
        {routes.map(({ name, path }) => (
          <MenuList key={name}>
            <NavLink to={path} className={classes.link}>{name}</NavLink>
          </MenuList>
        ))}
      </CardContent>
    </Card>
  );
}
