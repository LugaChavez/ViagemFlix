import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import GlobalStyles from './GlobalStyles.js/index.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <AppRoutes/>
  </React.StrictMode>
);

