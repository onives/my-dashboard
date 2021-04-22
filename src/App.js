import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import DashboardLayout from './components/DashboardLayout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About'


library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Hello bitches!</h1>
        <DashboardLayout />
        <Switch>
          <Route exact path='/about' component={About} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
