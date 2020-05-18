import React from 'react';
import propTypes from 'prop-types';
// import { CSSTransition } from 'react-transition-group';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';
// import fadeTransition from '../../transitions/fade.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    contacts.length > 0 && (
      <ul className={styles.contactList}>
        {contacts.map(item => {
          return (
            <li key={item.id}>
              <ContactItem
                contactItem={item}
                onRemoveContact={() => onRemoveContact(item.id)}
              />
            </li>
          );
        })}
      </ul>
    )
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
  onRemoveContact: propTypes.func.isRequired,
};

export default ContactList;
