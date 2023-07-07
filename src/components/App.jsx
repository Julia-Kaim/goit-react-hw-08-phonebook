import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

// import { ContactList } from '../components/ContactList/ContactList';
// import { Filter } from '../components/Filter/Filter';
// import { ContactForm } from '../components/ContactForm/ContactForm';
// import styles from './App.module.css';
// import { selectContacts } from 'redux/selectors';
// import { selectFilter } from 'redux/selectors';
import { refreshUserThunk } from 'redux/user/userThunk';
import Navigation from './Navigation/Navigation';
import { PublicRoute } from './Public/PublicRoute';
import SignUp from 'pages/SignUp';
import Login from 'pages/Login';
import { PrivateRoute } from './Private/PrivateRoute';
import Contacts from 'pages/Contacts';

export const App = () => {
  // const filtered = useSelector(selectFilter);
  // const contacts = useSelector(selectContacts);

  // const filterContact = e => {
  //   const filteredContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filtered.toLowerCase())
  //   );
  //   return filteredContacts;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
