import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contacts/contactsOperations';
import { filteredContactList } from 'redux/contacts/contactsSelector';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(filteredContactList);

  const dispatch = useDispatch();

  const deleteSelectedContact = id => dispatch(removeContacts(id));

  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <li className={s.item} key={id}>
          <Contact
            name={name}
            number={phone}
            onDeleteContact={() => deleteSelectedContact(id)}
            contactId={id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
