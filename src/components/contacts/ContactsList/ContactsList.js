import React, { useState } from 'react';
import './ContactsList.styles.css';
import { Contact } from 'components/contacts/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.contacts.items;
  });
  const [searchInputValue, setSearchInputValue] = useState('');
  const handleSearchInput = e => {
    e.preventDefault();
    setSearchInputValue(e.target.value);
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchInputValue.toLowerCase())
  );
  const user = useSelector(state => {
    return state.auth.user;
  });

  if (user.name === null) {
    return (
      <div className="notlogged_info">
        You must be logged in to see your contacts
      </div>
    );
  } else {
    return (
      <div className="filter_form">
        <input
          type="text"
          name="filter"
          placeholder="Search..."
          value={searchInputValue}
          onChange={handleSearchInput}
          className="filter_input"
        />
        <ul className="contacts_list">
          {filteredContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      </div>
    );
  }
};
