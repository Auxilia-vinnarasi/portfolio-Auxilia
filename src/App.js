import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";
import AboutMe from "./pages/AboutMe/index"
import Resume from "./pages/Resume/Resume"
import Home from "./pages/Home/index"
import Wrapper from "./components/Wrapper/index";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)
function App() {
  return (
    <Router>
    <div>
    
      <Wrapper>
        <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/resume" component={Resume} />
        </Switch>
      </Wrapper> 
    </div>
  </Router>
  );
}

export default App;
