import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/App.jsx';

const url = new URL(window.location.href);
const path = url.pathname;
const idSearch = /(\d{8})/;
const listing = path.match(idSearch);
// console.log('Line 10', listing[0]);

ReactDOM.render(<Router><App listing={listing[0]} /></Router>, document.getElementById('reviews'));
