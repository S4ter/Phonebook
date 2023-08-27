import { ContactsList } from 'components/contacts/ContactsList/ContactsList';
import { PhonebookForm } from 'components/contacts/PhonebookForm/PhonebookForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/actions';

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PhonebookForm />
      <ContactsList />;
    </div>
  );
};
