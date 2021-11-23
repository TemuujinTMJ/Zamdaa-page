import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sidebar from './components/sidebar';


ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
