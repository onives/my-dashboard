import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import DashboardNav from './DashboardNav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutLayout from './AboutLayout';
import ProjectsLayout from './ProjectsLayout';
import BlogLayout from './BlogLayout';
import LoginPage from './LoginPage';



library.add(fab, fas)

function Dashboard() {
  return (
    <div className="App">
      <Router>
        <DashboardNav />
        <Switch>
          <Route exact path='/dashboard' component={AboutLayout} />
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/projects' component={ProjectsLayout} />
          <Route exact path='/blogs' component={BlogLayout} />
        </Switch>

      </Router>
    </div>
  );
}

export default Dashboard;
