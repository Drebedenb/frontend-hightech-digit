import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Route, Router, Routes} from "react-router";
import Login from "./modules/Login/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <div>
              <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="*" element={<App />} />
                  <Route path="/*" element={<App />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
          </div>
      </Router>
  </React.StrictMode>
);

