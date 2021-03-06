import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';
import Navigation from './Navigation'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Navigation/>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
