import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/tailwindcss/defaultConfig.js';
import '../node_modules/@fortawesome/react-fontawesome/index.js';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

import App from './App';
import reportWebVitals from './reportWebVitals';
import NetflixIndex from './components/NetflixIndex'; // Import NetflixIndex
import LoginForm from './components/LoginForm';
import DataBinding from './components/DataBinding';
import DataBindingComponent from './components/DataBindingComponent';
import UseState from './components/UseState';
import Formik from './components/Formik';
import RegisterUser from './components/Formik';
import YupValidation from './components/YupValidation';
import FakeStore from './components/FakeStore';
import AbcIndex from './components/routing/abc-index.jsx';
import { CookiesProvider } from 'react-cookie';
import PortfolioIndex from './portfolio/Portfolio-Index.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <PortfolioIndex></PortfolioIndex>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
