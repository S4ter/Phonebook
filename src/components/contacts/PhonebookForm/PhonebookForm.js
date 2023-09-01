import React, { useState } from 'react';
import './PhonebookForm.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/actions';

export const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contactsFromApi = useSelector(state => {
    return state.contacts.items;
  });

  const [contact, setContact] = useState({
    name: '',
    number: '',
  });
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    if (
      contactsFromApi.some(
        contact => contact.number === event.target.elements.number.value
      )
    ) {
      alert(
        `Contact with number: ${event.target.elements.number.value} already exist.`
      );
    } else {
      dispatch(addContact({ name: contact.name, number: contact.number }));
      form.reset();
    }
  };
  const handleChangeInput = e => {
    setContact(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const user = useSelector(state => {
    return state.auth.user;
  });

  if (user.name === null) {
    return;
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit} className="phonebook_form">
          <div className="input_containers">
            <input
              type="text"
              name="name"
              onChange={handleChangeInput}
              required
              pattern="^[A-Za-z.'\- ]+$"
              className="form_input"
              placeholder="Name"
            />
            <input
              type="tel"
              name="number"
              onChange={handleChangeInput}
              required
              pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
              className="form_input"
              placeholder="Number"
            />
          </div>
          <button type="submit" className="submit_button">
            Add contact
          </button>
        </form>
      </div>
    );
  }
};
