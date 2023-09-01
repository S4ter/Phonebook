import React, { Suspense } from 'react';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { refreshUser } from 'redux/auth/actions.js';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Homepage } from 'pages/Homepage.js';
import { RegisterPage } from 'pages/RegisterPage.js';
import { LoginPage } from 'pages/LoginPage.js';
import { ContactsPage } from 'pages/ContactsPage.js';
import { fetchContacts } from 'redux/contacts/actions';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>

        {/* <div>
          <h1>Phonebook</h1>
          {isLoading && !error && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <PhonebookForm />
          <ContactsList />
          <RegisterForm />
        </div> */}
      </Routes>
    </Suspense>
  );
};
