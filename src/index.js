import './index.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'App';
import { persistor, store } from 'redux/store';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
