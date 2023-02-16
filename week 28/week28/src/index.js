import React from 'react';
import ReactDOM from 'react-dom/client';
import App  from './components/app/App.jsx';
import './style/index.scss';
import './components/app/app.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


