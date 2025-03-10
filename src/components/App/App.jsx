import { useState } from 'react'

import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"

export default function App() {
  const [contacts, setContact] = useState(
    [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

  )

const handleDeleteContact = (id) => {
  setContact(prevContacts => prevContacts.filter(contact => contact.id !== id));
};
  
  const [searchQuery, setSearchQuery] = useState("");
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox value={searchQuery} onChange={setSearchQuery}/>
  <ContactList contacts={filteredContacts} onDelete={handleDeleteContact}/>
</div>

    </>
  )
}

