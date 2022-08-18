import PropTypes from 'prop-types';
import { FcCancel, FcCellPhone } from 'react-icons/fc';
import s from './Contact.module.css';

const Contact = ({ name, phone, onDeleteContact }) => {
  return (
    <>
      <div className={s.wrapper}>
        <span className={s.icon}>
          <FcCellPhone size="35" />
        </span>
        <p className={s.name}>{name}</p>
      </div>
      <div className={s.wrapper}>
        <p className={s.number}>{phone}</p>
        <button className={s.button} type="button" onClick={onDeleteContact}>
          <FcCancel size="30" />
        </button>
      </div>
    </>
  );
};

Contact.prototype = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
