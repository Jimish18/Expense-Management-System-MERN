import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TransactionContextProvider } from './context/TransactionContext';
import { UserContextProvider } from './context/UserContext';
import { ToggleSidebarContextProvider } from './context/ToggleSidebarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToggleSidebarContextProvider>
        <UserContextProvider>
          <TransactionContextProvider>
            <App />  
          </TransactionContextProvider>  
        </UserContextProvider> 
      </ToggleSidebarContextProvider>   
    </BrowserRouter>
  </React.StrictMode>
);