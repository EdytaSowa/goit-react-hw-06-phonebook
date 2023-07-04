import React from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useEffect } from 'react';
import { getContacts, getFilter } from './redux/selectors';
import { useDispatch } from 'react-redux';
import { addContact, delContact } from './redux/actions';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();


  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) || initalContacts
  // );

  // const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log(contacts);
  }, [contacts]);

  // const handleChangeFilter = event => {
  //   const value = event.target.value;
  //   setFilter(value);
  // };

  const handleSubmit = e => {
    // const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsLists = [...contacts];

    if (
      contactsLists.findIndex(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      ) !== -1
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(name, number));
    }
 
  };

  const handleDelete = e => {
    dispatch(delContact(e));
  };

  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactsList;
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2> Contacts </h2>
      <Filter />
      <ContactList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      />
    </div>
  );
};
