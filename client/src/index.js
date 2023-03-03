import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/custom.css';
import App from './App';
import axios from "axios"
axios.defaults.baseURL = "http://localhost:4000/api/v1";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
