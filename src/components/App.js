import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addToContacts = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]); // previously setContacts([...contacts, contact]);
    console.log(contact.id);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY, contacts)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  console.log(contacts);
  return (
    <>
      <Header />
      <AddContact addToContacts={addToContacts} />
      <ContactList contacts={contacts} getContactId={deleteContact} />
    </>
  );
}

export default App;
