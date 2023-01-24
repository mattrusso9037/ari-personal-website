import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import {About} from "./components/About/About";
import {NavBar} from "./components/Navbar/NavBar";
import ThemeProvider from './contexts/theme/themeProvider';
import { Contact } from './components/Contact/Contact';
import { Main } from './main';

ReactDOM.render(
    <Main />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass aF function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
