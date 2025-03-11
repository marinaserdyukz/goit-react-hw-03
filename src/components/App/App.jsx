import { useState, useEffect } from 'react'
import {nanoid} from 'nanoid'

import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });




const handleDeleteContact = (id) => {
  setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
};
  
  const [searchQuery, setSearchQuery] = useState("");
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, { id: nanoid(), ...newContact }]);
  };

useEffect(() => {
  
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div>
  <h1>Phonebook</h1>
  <ContactForm onAddContact={handleAddContact}/>
  <SearchBox value={searchQuery} onChange={setSearchQuery}/>
  <ContactList contacts={filteredContacts} onDelete={handleDeleteContact}/>
</div>

    </>
  )
}

