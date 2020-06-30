import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About2 from "./components/About2";
import Contact from "./components/Contact";
import About from "./components/About"
import CV from "./components/CV";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/About2' component={About2}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/About' component={About}/>
          <Route path='/CV' component={CV}/>
          <Route path='/Projects' component={Projects}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
