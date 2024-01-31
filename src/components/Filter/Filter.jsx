import { useDispatch, useSelector } from 'react-redux';
import s from './Filter.module.css';
import { TextField } from '@mui/material';
import Container from '@mui/material/Container';

import {
  changeFilter,
  selectFilter,
} from '../../redux/filterSlice/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const changeFilterValue = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Container maxWidth="xs">
      <span className={s.label}>Find contacts by name</span>
      <TextField
        sx={{ backgroundColor: 'rgba(208, 224, 241, 0.822)' }}
        inputProps={{ inputMode: 'tel', pattern: '[0-9]*' }}
        margin="normal"
        fullWidth
        onChange={changeFilterValue}
        type="text"
        name="name"
        required
        className={s.input}
        value={filter}
      />
    </Container>
  );
};
