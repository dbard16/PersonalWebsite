import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Main />
    </div>,
  </Router>,
  document.getElementById('app')
);
