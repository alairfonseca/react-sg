import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth/auth';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
