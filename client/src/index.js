import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TransactionContextProvider } from './context/TransactionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TransactionContextProvider>
        <App />  
      </TransactionContextProvider>    
    </BrowserRouter>
  </React.StrictMode>
);