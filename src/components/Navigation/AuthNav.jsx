import { Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Toolbar>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Sign In</NavLink>
    </Toolbar>
  );
};
