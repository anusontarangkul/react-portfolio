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
        <Route exact path={(process.env.PUBLIC_URL || "/") + "/"} component={Home} />
        <Route path={(process.env.PUBLIC_URL || "/about") + "/about"} component={About} />
        <Route path={(process.env.PUBLIC_URL || "/portfolio") + "/portfolio"} component={Portfolio} />
        <Route path={(process.env.PUBLIC_URL || "/contact") + "/contact"} component={Contact} />
        <Route path={(process.env.PUBLIC_URL || "/resume") + "/resume"} component={Resume} />
        <Route path="/react-portfolio" component={Home} />
        <Redirect from="*" to="/" exact component={Home} />

      </Switch>

      <Footer />
    </div>

  );
}

export default App;

