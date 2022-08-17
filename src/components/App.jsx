import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { useEffect } from 'react';
import Filter from './Filter/Filter';
import Message from './Message/Message';
import s from './App.module.css';
import { getItem } from 'redux/contactsSelector';
import { getContacts } from 'redux/contactsOperations';

const App = () => {
  const contacts = useSelector(getItem);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phone book</h1>
      {<ContactForm />}

      <h2 className={s.subtitle}>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? <ContactList /> : <Message />}
    </div>
  );
};

export default App;
