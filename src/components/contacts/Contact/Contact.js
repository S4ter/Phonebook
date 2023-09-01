import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/actions';
import './Contact.styles.css';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className="contact_container">
      <p key={contact.id} className="contact_info">
        Name: {contact.name}
      </p>
      <p className="contact_info">Number: {contact.number}</p>
      <button
        className="delete_button"
        onClick={() => handleDelete(contact.id)}
      >
        <span className="button_text">X</span>
      </button>
    </div>
  );
};
