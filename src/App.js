import React from 'react';
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio"
import Wrapper from "./Components/Wrapper";
import Footer from "./Components/Footer"
import Resume from "./Components/Resume/resume.pdf"
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/react-portfolio" component={Home} />
        <Redirect from="*" to="/" exact component={Home} />

      </Switch>
      <Footer />
    </div>

  );
}

export default App;
