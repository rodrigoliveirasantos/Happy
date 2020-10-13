import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// .render renderiza um conteúdo JSX dentro do tag especificado (root no caso)
// <App /> insere o conteúdo que está no componente App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

