import { AppBar, Toolbar } from '@mui/material';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Navigation } from './Navigation/Navigation';
import { selectIsLoggedIn } from '../redux/authSlice/AuthSlice';
import { AuthNav } from './Navigation/AuthNav';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar>
      <Toolbar
        sx={{ display: 'flex', fontSize: 18, justifyContent: 'space-between' }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
