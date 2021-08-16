import React, {useContext, Suspense} from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthContext from './components/auth/auth-context'; 
import LoadingSpinner from "./components/generics/LoadingSpinner";
const LoginPage = React.lazy(() => import("./components/LoginPage"));
const AboutLayout = React.lazy(()=> import("./components/AboutLayout"));
const ProjectsLayout = React.lazy(()=> import("./components/ProjectsLayout"));
const ProtectedRoute = React.lazy(()=> import("./components/ProtectedRoute"));
const BlogLayout = React.lazy(()=> import("./components/BlogLayout"));
const SingleProject = React.lazy(()=> import("./components/SingleProject"));
const SingleBlog = React.lazy(()=> import("./components/SingleBlog"));

library.add(fab, fas);

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div className="center">
          <LoadingSpinner />
        </div>}>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            {authCtx.isLoggedIn && <Route exact path="/projects/:id" component={SingleProject} />}
            {authCtx.isLoggedIn && <Route exact path="/blogs/:id" component={SingleBlog} />}
            <ProtectedRoute path="/dashboard"> <AboutLayout /> </ProtectedRoute> 
            <ProtectedRoute path="/projects"> <ProjectsLayout /> </ProtectedRoute>
            <ProtectedRoute path="/blogs"> <BlogLayout /> </ProtectedRoute>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
