import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'; // Import your global styles if you have any

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your application inside the root
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);