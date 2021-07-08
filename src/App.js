import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AboutLayout from "./components/AboutLayout";
import ProjectsLayout from "./components/ProjectsLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogLayout from "./components/BlogLayout";


library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <ProtectedRoute path="/dashboard"> <AboutLayout /> </ProtectedRoute> 
          <ProtectedRoute path="/projects"> <ProjectsLayout /> </ProtectedRoute>
          <ProtectedRoute path="/blogs"> <BlogLayout /> </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
