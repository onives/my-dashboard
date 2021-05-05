import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import DashboardNav from './components/DashboardNav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import BlogLayout from './components/BlogLayout';



library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <Router>
        <DashboardNav />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/blogs' component={BlogLayout} />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
