import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/slice';
import { addContactThunk } from '../../redux/contacts/operations';
import { Button, TextField, Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import s from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const addFormContact = e => {
    e.preventDefault();
    const isExist = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(
      addContactThunk({
        name,
        number,
      })
    );

    setName('');
    setNumber('');
  };

  return (
    <Container maxWidth="xs" className={s.contStyle}>
      <Typography component="h1" variant="h5">
        Add Contact
      </Typography>
      <Box component="form" onSubmit={addFormContact} sx={{ mt: 1 }}>
        <TextField
          sx={{ backgroundColor: 'rgba(208, 224, 241, 0.822)' }}
          inputProps={{
            inputMode: 'text',
            pattern: '^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$',
          }}
          margin="normal"
          fullWidth
          label="Name"
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
        />
        <TextField
          sx={{ backgroundColor: 'rgba(208, 224, 241, 0.822)' }}
          inputProps={{ inputMode: 'tel', pattern: '[0-9]*' }}
          margin="normal"
          fullWidth
          label="Phone number"
          type="tel"
          name="number"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => setNumber(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, display: 'flex', gap: 3 }}
        >
          <p>Add contact</p>
        </Button>
      </Box>
    </Container>
  );
};
