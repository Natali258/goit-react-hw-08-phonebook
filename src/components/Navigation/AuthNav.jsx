import { Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import { toolbarStyle } from 'components/Navigation/StyleNav';

export const AuthNav = () => {
  return (
    <Toolbar /* sx={toolbarStyle} */>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Sign In</NavLink>
    </Toolbar>
  );
};
