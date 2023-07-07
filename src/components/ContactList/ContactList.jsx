import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';
import { useDispatch } from 'react-redux';

import { delContactsThunk } from 'redux/contactsThunk';

export const ContactList = ({ listContact }) => {
  const dispatch = useDispatch();
  return listContact.map(cont => {
    return (
      <ul className={styles.list}>
        <li key={cont.id} className={styles.item}>
          <p key={cont.id} className={styles.contact}>
            {cont.name}......... {cont.number}
          </p>
          <button
            className={styles.btn}
            type="submit"
            onClick={() => {
              dispatch(delContactsThunk(cont.id));
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    );
  });
};

ContactList.propTypes = {
  listContact: PropTypes.array.isRequired,
};
