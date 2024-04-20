import { filterUser } from '../redux/contacts-selectors.js'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import ContactForm from './contact-form/ContactForm.jsx'
import ContactList from './contact-list/ContactList.jsx'
import Filter from './filter/Filter.jsx'
import css from './App.module.css';


export default function App() {
  
  const users = useSelector((state) => state.users.contacts)
  const [filteredContact, setFilteredContacts]= useState('')
  const dispatch = useDispatch()

  function handleFilter(e){ 
    
    dispatch(filterUser(e.target.value))
    setFilteredContacts(users.filter((user) =>
            user.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      )
    }

return (
    <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />      
        <h2>Contacts</h2>
      <Filter handleFilter={handleFilter}/>
      <ContactList filteredContact={filteredContact } />
    </div>
  )
}