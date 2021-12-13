import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <>
    <CartHeader/>
    <App />
    <CartFooter year= "2021" />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
