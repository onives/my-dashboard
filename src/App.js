import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
