import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // Ensure the path is correct
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider >
      <App />
    </AuthProvider>
  </BrowserRouter>
);
