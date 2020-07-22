import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/App';

// const url = new URL(window.location.href);
// const path = url.pathname;
// const idSearch = /(\d{8})/;
// const listing = path.match(idSearch);
const listing = '09123456';

ReactDOM.render(<Router><App listing={listing} /></Router>, document.getElementById('reviews'));
