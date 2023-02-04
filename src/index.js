
import {createRoot} from 'react-dom/client';
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);

