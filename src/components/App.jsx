import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { addContact } from 'redux/contactsSlice';
import Filter from './Filter/Filter';
import Message from './Message/Message';
import s from './App.module.css';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phone book</h1>
      {<ContactForm onSubmit={addContact} />}

      <h2 className={s.subtitle}>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? <ContactList /> : <Message />}
    </div>
  );
};

export default App;
