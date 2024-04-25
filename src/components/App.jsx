import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterUser } from '../redux/contacts-slices.js';
import { getContacts } from '../redux/contacts-slices.js';
import ContactForm from './contact-form/ContactForm.jsx';
import ContactList from './contact-list/ContactList.jsx';
import Filter from './filter/Filter.jsx';
import css from './App.module.css';

export default function App() {

  const users = useSelector((state) => state.users.contacts.items);
  const [filteredContact, setFilteredContacts] = useState('');
  const isLoading = useSelector((state) => state.users.contacts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  function handleFilter(e) {
    dispatch(filterUser(e.target.value));
    setFilteredContacts(
      users.filter((user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter handleFilter={handleFilter} />
      {isLoading ? (
        <h1>Is Loading...</h1>
      ) : (
        <ContactList filteredContact={filteredContact} />
      )}
    </div>
  );
}