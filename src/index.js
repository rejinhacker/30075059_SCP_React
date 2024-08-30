import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is installed
import './index.css'; // Ensure this file exists in the same directory
import App from './App'; // Ensure this file exists in the same directory
import reportWebVitals from './reportWebVitals'; // Ensure this file exists in the same directory

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app
reportWebVitals(); // This should not cause an issue
