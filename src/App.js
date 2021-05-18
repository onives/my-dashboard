import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AboutLayout from "./components/AboutLayout";
import ProjectsLayout from "./components/ProjectsLayout";
import BlogLayout from "./components/BlogLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/dashboard" component={AboutLayout} />
          <Route exact path="/projects" component={ProjectsLayout} />
          <Route exact path="/blogs" component={BlogLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
