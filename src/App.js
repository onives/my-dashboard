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
import SingleProject from "./components/SingleProject";
import SingleBlog from "./components/SingleBlog";


library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/projects/:id" component={SingleProject} />
          <Route exact path="/blogs/:id" component={SingleBlog} />
          <ProtectedRoute path="/dashboard"> <AboutLayout /> </ProtectedRoute> 
          <ProtectedRoute path="/projects"> <ProjectsLayout /> </ProtectedRoute>
          <ProtectedRoute path="/blogs"> <BlogLayout /> </ProtectedRoute>
          {/* <ProtectedRoute path="/projects/:id"> <SingleProject /> </ProtectedRoute> */}
          {/* <ProtectedRoute path="/blogs/:id"> <SingleBlog /> </ProtectedRoute> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
