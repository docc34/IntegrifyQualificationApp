import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, NavLink,  Route } from 'react-router-dom';
import {Home} from './HomePage/Home';
import {CompanyDetail} from './CompanyDetail/CompanyDetail';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/"  element={<Home />}></Route>
          <Route path="/companyDetail"element={<CompanyDetail />}></Route>
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
