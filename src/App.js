import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={ Login } />
      </Router>
    </div>
  );
}

export default App;
