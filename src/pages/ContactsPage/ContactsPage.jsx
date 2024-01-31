import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import React from 'react';

export const ContactsPage = () => {
  return (
    <div>
      ContactsPage
      <ContactForm />
      <Filter />
      <Contacts />
    </div>
  );
};
