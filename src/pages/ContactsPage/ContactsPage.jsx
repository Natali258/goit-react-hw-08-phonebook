
import { ContactForm } from 'components/ContactForm/ContactForm'
import { Contacts } from 'components/Contacts/Contacts'
import { Filter } from 'components/Filter/Filter'
import React from 'react'

export const ContactsPage = () => {
  return (
    <div>ContactsPage
      <ContactForm />
      <Filter />
      <Contacts/>
    </div>
  )
}




// import { useSelector } from 'react-redux';
// import { CssBaseline, Container, Box } from '@mui/material';
// import React from 'react';
// // import { boxContactsStyle, containerContactsStyle } from './StylePages';
// import { selectIsLoading } from '../../redux/contacts/slice';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Filter } from 'components/Filter/Filter';
// import { Contacts } from 'components/Contacts/Contacts';
// import { boxContactsStyle, containerContactsStyle } from 'pages/Style';

// export const ContactsPage = () => {
//   const isLoading = useSelector(selectIsLoading);

//   return (
//     <Container component="main" maxWidth="md" sx={containerContactsStyle}>
//       <CssBaseline />
//       <Box sx={boxContactsStyle}>
//         <ContactForm />
//         <Filter />
//         {isLoading && <Contacts />}
//       </Box>
//     </Container>
//   );
// };


