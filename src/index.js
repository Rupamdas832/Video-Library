import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './Store/storeContext';
import { AuthProvider } from './Store/authContext';
import { UserProvider } from './Store/userContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <StoreProvider>
        <UserProvider>
          <App />
        </UserProvider> 
      </StoreProvider> 
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
