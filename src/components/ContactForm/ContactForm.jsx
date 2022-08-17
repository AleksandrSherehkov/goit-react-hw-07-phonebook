import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { addContacts } from 'redux/contacts/contactsOperations';
import { getItem } from 'redux/contacts/contactsSelector';
import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getItem);
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const input = e.currentTarget;

    input.name === 'name' && setName(input.value);
    input.name === 'number' && setNumber(input.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const newElement = { name, number };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? Report.warning(`${name}`, 'This user is already in the contact list.', 'OK')
      : dispatch(addContacts(newElement));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmitForm}>
      <label className={s.label}>
        <span className={s.title}>Name</span>
        <input
          className={s.input}
          placeholder="Enter full name"
          onChange={handleChangeInput}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        <span className={s.title}>Number</span>
        <input
          className={s.input}
          placeholder="Enter number"
          onChange={handleChangeInput}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
