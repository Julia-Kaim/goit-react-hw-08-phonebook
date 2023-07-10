import { ContactForm } from 'components/ContactForm/ContactForm';
import styles from '../components/App.module.css';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { selectContacts } from 'redux/selectors';
import { selectFilter } from 'redux/selectors';

const { useEffect } = require('react');
const { useDispatch, useSelector } = require('react-redux');
const { getContactsThunk } = require('redux/contactsThunk');

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(selectFilter);
  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };
  useEffect(() => {
    dispatch(getContactsThunk);
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <ContactForm />
      <Filter />
      <ContactList listContact={filterContact()} />
    </div>
  );
};

export default Contacts;
