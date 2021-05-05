import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import DashboardNav from './components/DashboardNav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutLayout from './components/AboutLayout';
import ProjectsLayout from './components/ProjectsLayout';
import BlogLayout from './components/BlogLayout';



library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <Router>
        <DashboardNav />
        <Switch>
          <Route exact path='/' component={AboutLayout} />
          <Route exact path='/projects' component={ProjectsLayout} />
          <Route exact path='/blogs' component={BlogLayout} />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
