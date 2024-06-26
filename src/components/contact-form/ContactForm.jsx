import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts-selectors.js';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const users = useSelector((state) => state.users.contacts.items);
  const dispatch = useDispatch();
  const handleUpdateContacts = (e) => {
    e.preventDefault();
    const form = e.target.form;

    if (!name.trim() || !number.trim()) {
      alert('Please complete the information.');
      return; // Si algún campo está vacío, no se envía el formulario
    }

    if (users.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(name, number));
    }

    form.reset()
      setName(''); // Limpia el estado del nombre
      setNumber(''); // Limpia el estado del número
  };

  return (
    <form className={css.form}>
      <label className={css.label}>Name:</label>
      <input
        className={css.input}
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
      />
      <label className={css.label}>Number:</label>
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        required
      />
      <button className={css.button} onClick={(e) => handleUpdateContacts(e)}>
        Add Contact
      </button>
    </form>
  );
}