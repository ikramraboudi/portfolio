import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Désactivation de la restauration automatique du scroll du navigateur
if (typeof window !== 'undefined') {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

