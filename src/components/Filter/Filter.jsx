import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/contactsSelector';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label className={s.label}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={changeFieldFilter}
        placeholder="Enter name"
      />
    </label>
  );
};

export default Filter;
