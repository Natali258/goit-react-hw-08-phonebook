import { useDispatch, useSelector } from 'react-redux';
import { Button, Toolbar } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { selectUser } from '../../redux/authSlice/AuthSlice';
import { logoutThunk } from '../../redux/authSlice/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Toolbar sx={{ display: 'flex', columnGap: 2, fontSize: 18 }}>
      {user.name}
      <Button
        variant="text"
        color="inherit"
        type="button"
        startIcon={<LogoutOutlinedIcon />}
        onClick={() => dispatch(logoutThunk())}
      >
        Log Out
      </Button>
    </Toolbar>
  );
};
